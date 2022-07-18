/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/jsx-props-no-spreading */
import { IconButton } from "../IconButton/IconButton";
import { Dialog } from "./Dialog";

const imgSrc = (src: string, type = "svg"): string =>
  new URL(`/src/assets/${src}.${type}`, import.meta.url).href;

export default {
  title: "Dialog",
  component: Dialog,
  argTypes: {
    // remove some property from the controls UI
    // TODO possibly move this into a separate file
    TriggerButton: {
      table: {
        disable: true,
      },
    },
    warningDialog: {
      table: {
        disable: true,
      },
    },
    close: {
      table: {
        disable: true,
      },
    },
    afterClose: {
      table: {
        disable: true,
      },
    },
  },
};

// A wrapper function from Storybook that allows you to pass in props to your component. We use this for showing controls
const Template = (args: any) => (
  <Dialog
    {...args}
    TriggerButton={
      <IconButton
        tooltip={{
          name: "Open Dialog",
        }}
        icon={imgSrc("icon")}
        size="medium"
      />
    }
  />
);

export const StandardDialog = Template.bind({});
export const ConfirmationDialog = Template.bind({});
StandardDialog.args = {
  title: "Standard Dialog",
  children: "Content",
  buttons: true,
};
ConfirmationDialog.args = {
  title: "Confirmation Dialog",
  children: "Content",
  warningDialog: "true",
  buttons: true,
};
