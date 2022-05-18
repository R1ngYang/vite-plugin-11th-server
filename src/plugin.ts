import { Connect, ViteDevServer } from 'vite';
import { Req, Res, XiPluginOptions, XiServer } from './types';

export function xiServerPlugin(options?: XiPluginOptions) {
  return {
    name: 'vite-plugin-xi-server',
    configureServer(server: ViteDevServer) {
      const app = server.middlewares as XiServer;
      app.use(parseParams());
      app.use(parseBody());
      app.use(send());
      app.router = app.use as any;
      options?.server?.(app);
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
