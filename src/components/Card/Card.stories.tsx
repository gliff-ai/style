/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/jsx-props-no-spreading */
import { Typography, Box } from "@mui/material";
import { Card } from "./Card";

export default {
  title: "Card",
  component: Card,
};

// A wrapper function from Storybook that allows you to pass in props to your component. We use this for showing controls
const Template = (args: any) => (
  <Box sx={{ width: "300px" }}>
    <Card {...args}>
      <Typography> This is a basic card.</Typography>
    </Card>
  </Box>
);

export const Primary = Template.bind({});
export const CloseCard = Template.bind({});
export const Warning = Template.bind({});
export const Pinned = Template.bind({});

Primary.args = {
  title: "Example Card",
};
CloseCard.args = {
  title: "Example Card",
  closeButton: true,
};
Warning.args = {
  title: "Example Card",
  warningDialog: true,
};
Pinned.args = {
  title: "Example Card",
  isPinned: true,
};
