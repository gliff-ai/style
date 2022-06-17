import { create } from '@storybook/theming';
import logo from "../src/assets/gliff.svg";



export default create({
  base: 'light',
  brandTitle: 'gliff.ai',
  brandUrl: 'https://gliff.ai',
  brandImage: logo,
  brandTarget: '_blank',
});