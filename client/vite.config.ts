import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react-swc'
import path, { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  plugins: [react(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      '@': resolve(__dirname, path.resolve('./src')),
    },
  },
  // server: {
  //   host: true,
  //   port: 8080,
  //   strictPort: true,
  //   origin: 'http://0.0.0.0:8080',
  // },
  // preview: {
  //   port: 8080,
  //   strictPort: true,
  // },
})
