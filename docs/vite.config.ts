import { defineConfig } from 'vite'
import { resolve } from 'path';
console.log( resolve(__dirname, '../src'))
export default defineConfig({
  resolve: {
    alias: { '/@/': resolve(__dirname, '../src')}
  },
  plugins: [
  ],
})
