import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { ViteAliases } from "vite-aliases";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: parseInt(process.env.PORT) || 3000,
    hmr: {
      port: process.env.PORT || process.env.CODESPACES ? 443 : 3000,
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
      external: [],
      output: {
        globals: {},
      },
    },
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  plugins: [reactRefresh(), ViteAliases()],
});
