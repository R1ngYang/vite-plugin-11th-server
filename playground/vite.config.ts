import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import xiServerPlugin from 'vite-plugin-xi-server';
// import xiServerPlugin from '../src/index';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), xiServerPlugin()]
});
