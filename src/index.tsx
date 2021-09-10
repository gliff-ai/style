export {
  theme,
  lightGrey,
  veryLightBlue,
  white,
  purple,
  lightestGrey,
  blue,
  middleGrey,
  mainGreen,
  black,
  darkGrey,
} from "./theme";

export { BaseSnackbar } from "./BaseSnackbar";

export type { BaseSnackbarProps } from "./BaseSnackbar";

export { HtmlTooltip } from "./BaseHtmlTooltip";

export { BaseIconButton } from "./BaseIconButton";
export { IconButton } from "./IconButton";
export { BaseTextButton } from "./BaseTextButton";
export { BaseTooltipTitle } from "./BaseTooltipTitle";
export type { Tooltip, Tooltips } from "./tooltips";

export const generateClassName =
  (prefix: string) =>
  (rule: Record<"key", string>): string =>
    `${prefix}-${rule.key}-${Math.floor(Math.random() * 10e9)}`;
