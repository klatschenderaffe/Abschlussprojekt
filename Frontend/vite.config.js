import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Port des Entwicklungsservers
  server: {
    port: 3001,
  },
  // Home Pfade des Projektes
  base: '/',
});
