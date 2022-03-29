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

export { HtmlTooltip } from "./BaseHtmlTooltip";

export { BaseIconButton } from "./BaseIconButton";
export { IconButton } from "./IconButton";
export { BaseTextButton } from "./BaseTextButton";
export { BaseTooltipTitle } from "./BaseTooltipTitle";
export { Popover } from "./Popover";
export { Logo } from "./Logo";
export { LoadingSpinner } from "./LoadingSpinner";
export { WarningSnackbar } from "./WarningSnackbar";
export { ProgressSnackbar } from "./ProgressSnackbar";
export { Popper } from "./Popper";

export {
  RadioGroup,
  Typography,
  MenuItem,
  FormControl,
  FormControlLabel,
  Radio,
  Checkbox,
  InputBase,
  TextField,
  Paper,
  Chip,
  Autocomplete,
  Avatar,
  InputLabel,
  Alert,
  Button,
  Select,
  IconButton as MuiIconbutton,
  ButtonGroup,
  Divider,
  Card,
} from "@mui/material";

export type { Task } from "./ProgressSnackbar";

export type { Tooltip, Tooltips } from "./tooltips";

export { icons } from "./icons";

export const generateClassName =
  (prefix: string) =>
  (rule: Record<"key", string>): string =>
    `${prefix}-${rule.key}-${Math.floor(Math.random() * 10e9)}`;
