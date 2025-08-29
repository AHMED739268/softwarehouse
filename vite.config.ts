// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import svgr from "vite-plugin-svgr";
// export default defineConfig({
//   plugins: [react(), svgr()],

// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  // أهم جزء
  preview: {
    port: 4173,
  },
  // ده اللي بيظبط fallback
  base: '/',
})
