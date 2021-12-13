import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      plugins: [react()],
      root: './example'
    };
  }
  return {
    plugins: [react()],
    build: {
      lib: {
        entry: 'src/index.tsx',
        formats: ['es', 'cjs'],
        fileName: 'index'
      }
    }
  };
});
