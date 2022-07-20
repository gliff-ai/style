/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/jsx-props-no-spreading */
import { IconButton } from "../IconButton/IconButton";
import { Dialogue } from "./Dialogue";

const imgSrc = (src: string, type = "svg"): string =>
  new URL(`/src/assets/${src}.${type}`, import.meta.url).href;

export default {
  title: "Dialogue",
  component: Dialogue,
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
  <Dialogue
    {...args}
    TriggerButton={
      <IconButton
        tooltip={{
          name: "Open Dialogue",
        }}
        icon={imgSrc("icon")}
        size="medium"
      />
    }
  />
);

export const StandardDialogue = Template.bind({});
export const ConfirmationDialog = Template.bind({});
StandardDialogue.args = {
  title: "Standard Dialogue",
  children: "Content",
  buttons: true,
};
ConfirmationDialog.args = {
  title: "Confirmation Dialogue",
  children: "Content",
  warningDialog: "true",
  buttons: true,
};
