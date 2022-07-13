import { HtmlTooltip } from "./Tooltip";
import { TooltipTitle } from "./TooltipTitle";

export default {
  title: "Tooltip",
  component: HtmlTooltip,
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
export const Primary = Template.bind({});

Primary.args = {
  tooltip: {
    name: "hskahadd",
    shortcut: "K",
    shortcutSymbol: "cmd",
  },
};
