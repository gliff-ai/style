// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  alias: {
    "@/": "/src/",
  },
  mount: {
    examples: { url: "/" },
    src: { url: "/dist" },
  },
  plugins: ["@snowpack/plugin-react-refresh", "@snowpack/plugin-babel"],
packageOptions: {
  knownEntrypoints: [
     'react/jsx-runtime'
  ],
},
  devOptions: {
  },
  buildOptions: {
  },
};
