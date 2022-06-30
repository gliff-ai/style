/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/jsx-props-no-spreading */
import { Chip } from "./Chip";

export default {
  title: "Chip",
  component: Chip,
};

// A wrapper function from Storybook that allows you to pass in props to your component. We use this for showing controls
const Template = (args: any) => <Chip {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: "tested",
  closeButton: false,
};
