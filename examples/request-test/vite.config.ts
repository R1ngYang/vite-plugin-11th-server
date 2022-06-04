import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { XiServer } from 'vite-plugin-11th-server';
import path from 'path';
import server from './server';
import { xiServerPlugin } from '../../src/plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    xiServerPlugin({
      server,
      serverDir: path.resolve(__dirname, "server"),
      port: 8088,
      outDir: path.resolve(__dirname, "dist")
    })
  ]
});
