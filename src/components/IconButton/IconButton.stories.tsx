/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/jsx-props-no-spreading */
import { IconButton } from "./IconButton";

const imgSrc = (src: string, type = "svg"): string =>
  new URL(`/src/assets/${src}.${type}`, import.meta.url).href;

export default {
  title: "IconButton",
  component: IconButton,
};

// A function from Storybook that allows you to pass in props to your component
/* eslint-disable react/jsx-props-no-spreading */
const Template = (args: string | any) => <IconButton {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const ActiveButton = Template.bind({});
export const DisabledButton = Template.bind({});

Primary.args = {
  tooltip: { name: "Small Button" },
  icon: imgSrc("icon"),
  size: "small",
};
Secondary.args = {
  tooltip: { name: "Small Button", shortcut: "K", shortcutSymbol: "cmd" },
  icon: imgSrc("icon"),
  size: "small",
};
ActiveButton.args = {
  tooltip: { name: "Small Active Button" },
  icon: imgSrc("icon"),
  fill: true,
  size: "small",
};
DisabledButton.args = {
  tooltip: { name: "Small Disabled Button" },
  icon: imgSrc("icon"),
  disabled: true,
  size: "small",
};
