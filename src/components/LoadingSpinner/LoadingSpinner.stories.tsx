/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/jsx-props-no-spreading */
import { LoadingSpinner } from "./LoadingSpinner";

export default {
  title: "Loading Spinner",
  component: LoadingSpinner,
};

// A wrapper function from Storybook that allows you to pass in props to your component. We use this for showing controls

const Template = () => <LoadingSpinner />;

export const StandardPopover = Template.bind({});
