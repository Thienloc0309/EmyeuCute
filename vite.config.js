import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // hoặc plugin tương ứng bạn đang dùng

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/EmyeuCute/", // Ví dụ: "/gitvalentine/"
})