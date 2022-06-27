/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/jsx-props-no-spreading */
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
};

// A wrapper function from Storybook that allows you to pass in props to your component. We use this for showing controls
const Template = (args: any) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: "Hello",
  disabled: false,
};
