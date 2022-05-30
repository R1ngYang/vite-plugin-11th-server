import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { xiServerPlugin } from 'vite-plugin-11th-server';
import path from 'path';
import { server } from './server';

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
