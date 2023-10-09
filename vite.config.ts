import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      { find: 'assets', replacement: '/src/assets' },
      { find: 'components', replacement: '/src/components' },
      { find: 'layout', replacement: '/src/layout' },
      { find: 'pages', replacement: '/src/pages' },
      { find: 'styles', replacement: '/src/styles' },
      { find: 'shared', replacement: '/src/shared' },
    ],
  },
});
