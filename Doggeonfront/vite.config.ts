import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // разрешаем доступ с других устройств
    port: 5173,
    strictPort: true, // не менять порт если занят
    // Оптимизации для Live Share
    hmr: {
      overlay: false // отключает overlay с ошибками (может ускорить)
    },
    watch: {
      usePolling: false, // для некоторых WSL может помочь true
      interval: 100
    }
  },
  // Оптимизация сборки
  optimizeDeps: {
    include: ['react', 'react-dom'] // укажи основные зависимости
  }
})