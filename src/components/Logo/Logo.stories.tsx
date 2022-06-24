/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Logo } from "./Logo";

export default {
  title: "Logo",
  component: Logo,
};

// A wrapper function from Storybook that allows you to pass in props to your component. We use this for showing controls
const Template = () => <Logo />;

export const GliffLogo = Template.bind({});
