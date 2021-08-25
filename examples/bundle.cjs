const {build} = require("esbuild")
const {pnpPlugin} = require("@yarnpkg/esbuild-plugin-pnp");


(async () => {
  await build({
    plugins: [pnpPlugin()],
    entryPoints: ["src/main.tsx"],
    bundle: true,
    outfile: "dist/main.js",
    inject: ["src/react-shim.js"],
    preserveSymlinks: true,
  })
})();
