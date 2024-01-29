import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import definePlugin from 'vite-plugin-define';


// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  plugins: [
    react(),
  ],
  server: {
    port: 3000
  },
})
