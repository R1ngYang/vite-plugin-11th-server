import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { xiServerPlugin } from 'vite-plugin-11th-server';
import path from 'path';
import server from './server';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  xiServerPlugin({
    server,
    serverDir: path.resolve(__dirname, "server"),
    port: 8088,
    outDir: path.resolve(__dirname, "dist")
  })
  ]
})
