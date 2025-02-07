import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Port des Entwicklungsservers
  server: {
    port: 3001, // Frondend 
    proxy: {
      "/api": "http://localhost:5000", // Backend-Server Proxy
      
    
  },
  // Home Pfade des Projektes
  base: '/',
},
});
