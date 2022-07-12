/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/jsx-props-no-spreading */
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    // remove some property from the controls UI
    // TODO possibly move this into a separate file?
    disableElevation: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
    classes: {
      table: {
        disable: true,
      },
    },
    color: {
      table: {
        disable: true,
      },
    },
    disableFocusRipple: {
      table: {
        disable: true,
      },
    },
    endIcon: {
      table: {
        disable: true,
      },
    },
    fullWidth: {
      table: {
        disable: true,
      },
    },
    href: {
      table: {
        disable: true,
      },
    },
    size: {
      table: {
        disable: true,
      },
    },
    startIcon: {
      table: {
        disable: true,
      },
    },
    sx: {
      table: {
        disable: true,
      },
    },
    variant: {
      table: {
        disable: true,
      },
    },
    tabIndex: {
      table: {
        disable: true,
      },
    },
    action: {
      table: {
        disable: true,
      },
    },
    centerRipple: {
      table: {
        disable: true,
      },
    },
    disableRipple: {
      table: {
        disable: true,
      },
    },
    disableTouchRipple: {
      table: {
        disable: true,
      },
    },
    focusRipple: {
      table: {
        disable: true,
      },
    },
    focusVisibleClassName: {
      table: {
        disable: true,
      },
    },
    LinkComponent: {
      table: {
        disable: true,
      },
    },
    onFocusVisible: {
      table: {
        disable: true,
      },
    },
    TouchRippleProps: {
      table: {
        disable: true,
      },
    },
    touchRippleRef: {
      table: {
        disable: true,
      },
    },
    ref: {
      table: {
        disable: true,
      },
    },
  },
};

// A wrapper function from Storybook that allows you to pass in props to your component. We use this for showing controls
const Template = (args: any) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Outline = Template.bind({});

Primary.args = {
  text: "Primary Button",
  disabled: false,
  disableElevation: true,
};
Secondary.args = {
  text: "Secondary Button",
  disabled: false,
  color: "secondary",
  disableElevation: true,
};
Outline.args = {
  text: "Outlined Button",
  disabled: false,
  color: "secondary",
  variant: "outlined",
  disableElevation: true,
};
