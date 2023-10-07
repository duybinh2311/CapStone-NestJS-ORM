import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path, { resolve } from 'path'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      '@': resolve(__dirname, path.resolve('./src')),
    },
  },
})
