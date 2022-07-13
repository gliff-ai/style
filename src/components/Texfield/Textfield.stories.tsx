/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/jsx-props-no-spreading */
import { Box } from "@mui/system";
import { TextField } from "./TextField";

export default {
  title: "TextField",
  component: TextField,
};

// A wrapper function from Storybook that allows you to pass in props to your component. We use this for showing controls
const Template = (args: any) => (
  <Box sx={{ width: "300px" }}>
    <TextField {...args} />
  </Box>
);

export const Primary = Template.bind({});

Primary.args = {
  label: "Text Field",
  icon: true,
};
