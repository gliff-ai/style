/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/jsx-props-no-spreading */
import { Typography } from "@mui/material";
import { IconButton } from "../IconButton/IconButton";
import { Popover } from "./Popover";

const imgSrc = (src: string, type = "svg"): string =>
  new URL(`/src/assets/${src}.${type}`, import.meta.url).href;

export default {
  title: "Popover",
  component: Popover,
};

// A wrapper function from Storybook that allows you to pass in props to your component. We use this for showing controls

const Template = (args: any) => (
  <Popover
    {...args}
    anchorOrigin={{ horizontal: "right", vertical: "top" }}
    TriggerButton={
      <IconButton
        tooltip={{
          name: "Open Popover",
        }}
        icon={imgSrc("icon")}
        size="medium"
      />
    }
  >
    <Typography> Content</Typography>
  </Popover>
);

export const StandardPopover = Template.bind({});

StandardPopover.args = {
  title: "Standard Popover",
};
