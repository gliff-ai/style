import { create } from '@storybook/theming';

// const imgSrc = (src, type = "svg") =>
//   new URL(`/src/assets/${src}.${type}`, import.meta.url).href;

export default create({
  base: 'light',
  brandTitle: 'gliff.ai',
  brandUrl: 'https://gliff.ai',
  brandImage: "src/assets/gliff.svg",
  brandTarget: '_blank',
});