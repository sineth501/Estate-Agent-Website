import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), 
      '@fortawesome': path.resolve(__dirname, './node_modules/@fortawesome'), 
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]', 
      },
    },
  },
  server: {
    fs: {
      allow: ['.'], 
    },
  },
  assetsInclude: ['**/*.ttf', '**/*.woff', '**/*.woff2'], 
});
