import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { directoryPlugin } from 'vite-plugin-list-directory-contents';

// // https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    directoryPlugin({
      baseDir: './public/assets/BlogPosts', // Pfad zum Ordner mit den Dateien
    }),
  ],
  //   // Port des Entwicklungsservers
  server: {
    port: 3001, // Frondend
    proxy: {
      '/api': 'http://localhost:5000', // Backend-Server Proxy
    },
    //     //  Vite test-konfiguration
    test: {
      globals: true,
      environment: 'jsdom', // wichtig für React-test
      include: ['**/*.test.{js,jsx}'], // Sucht in allen überordner
      setupFiles: './setupTests.js', // Pfad zur Setup-Datei
    },
    plugins: [react()],
    // Home Pfade des Projektes
    base: '/',
  },
});
