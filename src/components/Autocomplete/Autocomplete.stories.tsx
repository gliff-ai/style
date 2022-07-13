/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/jsx-props-no-spreading */
import { Autocomplete } from "./Autocomplete";

export default {
  title: "Autocomplete",
  component: Autocomplete,
};

// A wrapper function from Storybook that allows you to pass in props to your component. We use this for showing controls
const Template = (args: any) => <Autocomplete {...args} />;

export const AutocompleteSingle = Template.bind({});
