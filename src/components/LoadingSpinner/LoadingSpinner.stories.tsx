/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { LoadingSpinner } from "./LoadingSpinner";

export default {
  title: "Loading Spinner",
  component: LoadingSpinner,
};

// A wrapper function from Storybook that allows you to pass in props to your component. We use this for showing controls
const Template = () => <LoadingSpinner />;

export const Spinner = Template.bind({});
