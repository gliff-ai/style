export const imgSrc = (src: string, type = "svg"): string =>
  new URL(`/src/assets/icons/${src}.${type}`, import.meta.url).href;

const icons  = {brush: imgSrc("brush")} as Readonly<{
  [key: string]: string;
}>;

export { icons }