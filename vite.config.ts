import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  build: {
    outDir: process.env.BUILD_DIR || 'build',
    sourcemap: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
      components: path.resolve(__dirname, 'src/components'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      services: path.resolve(__dirname, 'src/services'),
    },
  },
  test: {
    coverage: {
      enabled: true,
      include: ['src/**/*.{ts,tsx}'],
      reporter: ['text', 'json', 'html'],
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./setupTests.ts'],
  },
});
