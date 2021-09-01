import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { ViteAliases } from "vite-aliases";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
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
