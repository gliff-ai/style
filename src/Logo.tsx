export const imgSrc = (src: string, type = "svg"): string =>
  new URL(`/src/assets/${src}.${type}`, import.meta.url).href;

const Logo = (): ReactElement => (
  <img
    src={imgSrc("gliff-master-black")}
    width="79px"
    height="60px"
    alt="gliff logo"
  />
);

export { Logo };
