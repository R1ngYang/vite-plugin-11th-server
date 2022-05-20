import { defineConfig, Connect } from 'vite';
import vue from '@vitejs/plugin-vue';
// import xiServerPlugin from 'vite-plugin-xi-server';
import xiServerPlugin from '../src/index';
import server from './server';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    xiServerPlugin({
      server,
      port: 8088,
      outDir: path.resolve(__dirname, "dist")
    })
  ]
});
