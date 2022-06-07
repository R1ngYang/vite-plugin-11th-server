### vite-plugin-11th-server

A vite plugin that fast build server

### Install

```
 npm install vite-plugin-11th-server
```

### Usage

- vite.config.ts

```ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { xiServerPlugin, XiServer } from 'vite-plugin-11th-server';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    vue(),
    xiServerPlugin({
      server: (app: XiServer) => {
        app.router('/hello', (req, res) => {
          res.end('hello world');
        });
        app.router('/api', (req, res) => {
          res.send(req.body);
        });
      },
      port: 8088,
      outDir: resolve(__dirname, 'dist')
    })
  ]
});
```

### XiPluginOptions

```ts
  server: (app: XiServer) => void;
  serverDir：string;
  port?: number;
  outDir?: string;
```

### Install Other

- Build must

```
 npm install connect
 npm install serve-static
```

### Build

```
 npm run build
```

### Run Server

```
 node ./dist/server.js
```

### Open

web http://localhost:8088/
server http://localhost:8088/hello
