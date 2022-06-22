/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/jsx-props-no-spreading */
import { Typography } from "@mui/material";
import { IconButton } from "../IconButton/IconButton";
import { Dialog } from "./Dialog";

const imgSrc = (src: string, type = "svg"): string =>
  new URL(`/src/assets/${src}.${type}`, import.meta.url).href;

export default {
  title: "Dialog",
  component: Dialog,
};

// A wrapper function from Storybook that allows you to pass in props to your component. We use this for showing controls

const Template = (title: any) => (
  <Dialog
    {...title}
    TriggerButton={
      <IconButton
        tooltip={{
          name: "Open Dialog",
        }}
        icon={imgSrc("icon")}
        size="medium"
      />
    }
  >
    <Typography> Content</Typography>
  </Dialog>
);

export const StandardDialog = Template.bind({});
export const ConfirmationDialog = Template.bind({});
StandardDialog.args = {
  title: "Standard Dialog",
};
ConfirmationDialog.args = {
  title: "Confirmation Dialog",
  warningDialog: "true",
};
