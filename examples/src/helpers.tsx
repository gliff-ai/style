export const imgSrc = (src: string, type = "svg"): string =>
  new URL(`/examples/src/assets/${src}.${type}`, import.meta.url).href;
