import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import alias from '@rollup/plugin-alias'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    alias({
      entries: [
        { find: '@components', replacement: './src/components/' },
        { find: '@hooks', replacement: './src/hooks/' },
        { find: '@pages', replacement: './src/pages/' },
        { find: '@routes', replacement: './src/routes/' },
        { find: '@src', replacement: './src/' },
      ],
    }),
  ],
})
