import { HtmlTooltip } from "./Tooltip";
import { TooltipTitle } from "./TooltipTitle";

export default {
  title: "Tooltip",
  component: HtmlTooltip,
};

// A wrapper function from Storybook that allows you to pass in props to your component. We use this for showing controls
const Template = (args: any) => 

 <HtmlTooltip
            {...args}
             placement={"top-start"}
            open={true}
            title={
              <TooltipTitle
                tooltip={{
                  name: "Tooltip With Big Shortcut",
                  shortcut: "space",
                  shortcutSymbol: "cmd",
                }}
              />
            }
 />           
export const Primary = Template.bind({});

Primary.args = {
  label: "Tooltip",
};