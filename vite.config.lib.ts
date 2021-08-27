import { defineConfig } from 'vite'
const path = require('path')
import reactRefresh from '@vitejs/plugin-react-refresh'
import { ViteAliases } from 'vite-aliases'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        minify: false, // TODO
        lib: {
          entry: path.resolve(__dirname, 'src/index.tsx'),
          name: '@gliff-ai/style',
          formats: ['es']
        },
        rollupOptions: {
          // make sure to externalize deps that shouldn't be bundled
          // into your library
          external: ['react', 'react-router-dom', '@material-ui/core', '@gliff-ai/styles'],
          output: {
            // Provide global variables to use in the UMD build
            // for externalized deps
            globals: {

            }
          }
        }
      },
  esbuild: {
    jsxInject: `import React from 'react'`
  },
  plugins: [ViteAliases()]
})

