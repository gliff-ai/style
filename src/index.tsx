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

export const imgSrc = (src: string, type = "svg"): string =>
  // Vite compiles this weirdly if it's  a template
  // eslint-disable-next-line prefer-template 
  new URL("/src/assets/" + src + "." + type, import.meta.url).href;

export const generateClassName =
  (prefix: string) =>
  (rule: Record<"key", string>): string =>
    `${prefix}-${rule.key}-${Math.floor(Math.random() * 10e9)}`;
