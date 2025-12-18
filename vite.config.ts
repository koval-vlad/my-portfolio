import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Treat .docx files as static assets so Vite does not try to parse them as JS
  assetsInclude: ['**/*.docx'],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
