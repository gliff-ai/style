# style
Theme styles for gliff.ai apps

Consists of 2 parts:
`@gliff-ai/style`: The library, which doesn't bundle any of the dependencies (in / and /src) and published as a package.
`@gliff-ai/style-example`: The sample page, which depends on the above, and adds 
the required dependencies. This can be bundled and either served locally or deployed

# Development

To develop locally:

(Maybe) `yarn`: Update the dependencies for the main lib
`yarn run watch`: Build and watch the lib in `/dist`
`cd examples && yarn && yarn serve` (You can do these separately if you want)

This will build and watch `/examples/src/main.tsx`, and use a symlink to the main lib files, 
so any updates there will be reflected on page refresh
