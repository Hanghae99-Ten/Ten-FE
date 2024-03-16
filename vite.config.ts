import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgr from '@svgr/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgr()],
  resolve: {
    alias: [
      { find: 'assets', replacement: '/src/assets' },
      { find: 'components', replacement: '/src/components' },
      { find: 'layout', replacement: '/src/layout' },
      { find: 'pages', replacement: '/src/pages' },
      { find: 'styles', replacement: '/src/styles' },
      { find: 'shared', replacement: '/src/shared' },
      { find: 'store', replacement: '/src/store' },
    ],
  },
});
