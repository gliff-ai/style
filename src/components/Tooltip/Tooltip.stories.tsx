import { HtmlTooltip } from "./Tooltip";
import { TooltipTitle } from "./TooltipTitle";
import {icons} from "../../icons"

export default {
  title: "Tooltip",
  component: HtmlTooltip,
   argTypes: {
    // remove prop from the controls UI in storybook  
    ref: {
      table: {
        disable: true,
      },
    },
  },
};

// A wrapper function from Storybook that allows you to pass in props to your component. We use this for showing controls
const Template = (args: any) => (
  <HtmlTooltip
    open={true}
    placement={"top-start"}
    title={<TooltipTitle {...args} />}
  >
    <p></p>
  </HtmlTooltip>
);
export const Tooltip = Template.bind({});

Tooltip.args = {
  tooltip: {
    name: "Tooltip",
  },
};
export const TooltipWithASimpleShortcut = Template.bind({});

TooltipWithASimpleShortcut.args = {
  tooltip: {
    name: "Tooltip with Simple Shortcut",
    shortcut: "K",
  },
};
export const TooltipWithComplexShortcut = Template.bind({});

TooltipWithComplexShortcut.args = {
  tooltip: {
    name: "Tooltip with Complex Shortcuts",
    shortcut: "K",
    shortcutSymbol: "cmd",
  },
};
export const TooltipWithStatus = Template.bind({});

TooltipWithStatus.args = {
  tooltip: {
    name: "Tooltip with Status",
    icon: icons.betaStatus
  },
};
export const TooltipWithSimpleShortcutAndStatus = Template.bind({});

TooltipWithSimpleShortcutAndStatus.args = {
  tooltip: {
    name: "Tooltip with Simple Shortcut & Status",
    shortcut: "K",
    icon: icons.betaStatus
  },
};
export const TooltipWithComplexShortcutAndStatus = Template.bind({});

TooltipWithComplexShortcutAndStatus.args = {
  tooltip: {
    name: "Tooltip with Complex Shortcut & Status",
    shortcut: "K",
    shortcutSymbol: "cmd",
    icon: icons.betaStatus
  },
};
