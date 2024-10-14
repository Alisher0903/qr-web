import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '185.74.4.138',  // IP manzil
    port: 3000,            // Portni o'rnatish (kerakli portni kiriting)
    strictPort: true       // Agar port band bo'lsa, xatolik qaytaradi
  }
})
