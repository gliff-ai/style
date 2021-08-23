// babel.config.js
module.exports = {
  presets: [
    "@babel/preset-typescript",
    ["@babel/preset-react", { "runtime": "automatic" }],
    ["@babel/preset-env", { "targets": { "esmodules": true }, "bugfixes": true, "modules": false }]
  ],
};
