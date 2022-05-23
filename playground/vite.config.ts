import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import xiServerPlugin from 'vite-plugin-11th-server';
import { xiServerPlugin, XiServer } from '../src/index';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    xiServerPlugin({
      server: (app: XiServer) => {
        app.router('/api', (req, res) => {
          res.send(req.body);
        });
      },
      port: 8088,
      outDir: path.resolve(__dirname, "dist")
    })
  ]
});
