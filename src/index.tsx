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
export { BaseTextButton } from "./BaseTextButton";
export { BaseTooltipTitle } from "./BaseTooltipTitle";
export type { Tooltip, Tooltips } from "./tooltips";

export const imgSrc = (src: string, type = "svg"): string => new URL(`/src/assets/${src}.${type}`, import.meta.url).href;
