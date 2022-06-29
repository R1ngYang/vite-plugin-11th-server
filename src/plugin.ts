import { Connect, UserConfig, ViteDevServer } from 'vite';
import { Req, Res, XiPluginOptions, XiServer } from './types';
import fs from "fs";
import path from 'path';
import { buildSync } from 'esbuild';
import { WebSocketServer } from 'ws';


let isBuild = false;
let wss: WebSocketServer | undefined;
export function xiServerPlugin(options?: XiPluginOptions) {
  return {
    name: 'vite-plugin-11th-server',
    async configureServer(server: ViteDevServer) {
      const app = server.middlewares as XiServer;
      app.use(parseParams());
      app.use(parseBody());
      app.use(send());
      app.router = app.use as any;

      wss = options?.wsPort ? new WebSocketServer({
        port: options?.wsPort,
      }) : undefined
      await options?.server?.(app, wss);
    },
    config: (config: UserConfig, { command }: { command: 'build' | 'serve' }) => {
      isBuild = command === 'build'
      return ({
        build: {
          outDir: path.resolve(options?.outDir ?? '/')
        }
      })
    },
    async closeBundle() {
      wss?.close()
      if (!isBuild) return
      let text = "";
      if (options?.serverDir) {
        const { outputFiles } = buildSync({
          entryPoints: [options.serverDir],
          bundle: true,
          platform: 'node',
          write: false
        })
        text = `${outputFiles[0].text}
        const server_default = module.exports.default;
        `
      } else {
        const serverStr = options?.server.toString()!;
        text = `const server_default = ${/(^\((\S+)|(\S+,\s{1}\S+)\)\s*=>.*)|(^function.*)|(^async function.*)/.test(serverStr) ? '' : 'function '}${serverStr}`
      }
      let ws = ""
      if (options?.wsPort) {
        ws = `
        const ws = require("ws");
        wss = new ws.WebSocketServer({
          port: ${options?.wsPort},
        })`
      }

      const code = `
      const serveStatic = require("serve-static");
      const connect = require('connect');
      (async ()=>{
        ${text}
        ${parseParams.toString()}
        ${parseBody.toString()}
        ${send.toString()} 
        const app = connect();
        app.use(parseParams());
        app.use(parseBody());
        app.use(send());
        app.use(serveStatic(\_\_dirname), { maxAge: '30d'})
        app.router = app.use;
        let wss = undefined;
        ${ws}
        await server_default(app, wss);
        app.listen(${options?.port ?? 8080});
      })()
      console.log('http://localhost:${options?.port ?? 8080}')`


      options?.outDir && fs.existsSync(options?.outDir) || options?.outDir && fs.mkdirSync(options?.outDir)
      const file = path.resolve(options?.outDir ?? '', `${new Date().getTime()}.js`)
      const out = path.resolve(options?.outDir ?? '', 'server.js')
      fs.writeFileSync(file, code || "", "utf8");
      buildSync({
        entryPoints: [file],
        bundle: true,
        platform: 'node',
        outfile: out,
      })
      fs.unlinkSync(file)
      console.info("build over")
      console.info("node server.js")
    }
  };
}

function parseParams() {
  return {
    handle(req: Req, _: Res, next: Function) {
      if (req.url.indexOf('?') != -1) {
        const params_string = req.url.substring(req.url.indexOf('?') + 1);
        const params_arr = params_string.split('&');
        req.params = Object.fromEntries(
          params_arr.map((param) => {
            const key = param.substr(0, param.indexOf('='));
            const val = param.substr(param.indexOf('=') + 1);
            return [key, val];
          })
        );
      }
      next();
    }
  } as unknown as Connect.HandleFunction;
}

function parseBody() {
  return {
    async handle(req: Req, _: Res, next: Function) {
      await req.on('data', (chunk) => (req.body = JSON.parse(chunk)));
      next();
    }
  } as unknown as Connect.HandleFunction;
}

function send() {
  return {
    async handle(_: Req, res: Res, next: Function) {
      res.send = (content: Object) => res.end(JSON.stringify(content));
      next();
    }
  } as unknown as Connect.HandleFunction;
}
