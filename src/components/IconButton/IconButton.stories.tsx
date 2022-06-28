/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/jsx-props-no-spreading */
import { IconButton } from "./IconButton";

const imgSrc = (src: string, type = "svg"): string =>
  new URL(`/src/assets/${src}.${type}`, import.meta.url).href;

export default {
  title: "IconButton",
  component: IconButton,
  argTypes: {
    // remove some property from the controls UI
    // TODO possibly move this into a separate file

    to: {
      table: {
        disable: true,
      },
    },
    component: {
      table: {
        disable: true,
      },
    },
    disableElevation: {
      table: {
        disable: true,
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
    iconColor: {
      table: {
        disable: true,
      },
    },
    backgroundColor: {
      table: {
        disable: true,
      },
    },
    setRefCallback: {
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
const Template = (args: string | any) => <IconButton {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const ActiveButton = Template.bind({});
export const DisabledButton = Template.bind({});

Primary.args = {
  tooltip: { name: "Small Button" },
  icon: imgSrc("icon"),
  size: "small",
};
Secondary.args = {
  tooltip: { name: "Small Button", shortcut: "K", shortcutSymbol: "cmd" },
  icon: imgSrc("icon"),
  size: "small",
};
ActiveButton.args = {
  tooltip: { name: "Small Active Button" },
  icon: imgSrc("icon"),
  fill: true,
  size: "small",
};
DisabledButton.args = {
  tooltip: { name: "Small Disabled Button" },
  icon: imgSrc("icon"),
  disabled: true,
  size: "small",
};
