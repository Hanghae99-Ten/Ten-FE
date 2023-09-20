import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@assets', replacement: '/src/assets' },
      { find: '@components', replacement: '/src/components' },
      { find: '@layout', replacement: '/src/layout' },
      // { find: '@assets', replacement: '/src/assets' }
      // { find: '@assets', replacement: '/src/assets' }
      // { find: '@assets', replacement: '/src/assets' }
    ],
  },
})
