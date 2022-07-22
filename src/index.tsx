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
} from "@/theme";

export { Card, Dialogue, Button } from "@/components";

export { icons } from "@/icons";

export { HtmlTooltip } from "@/BaseHtmlTooltip";
export { BaseIconButton } from "@/BaseIconButton";
export { IconButton } from "@/IconButton";
export { BaseTooltipTitle } from "@/BaseTooltipTitle";
export { Popover } from "@/Popover";
export { Logo } from "@/Logo";
export { LoadingSpinner } from "@/LoadingSpinner";
export { WarningSnackbar } from "@/WarningSnackbar";
export { ProgressSnackbar } from "@/ProgressSnackbar";
export { Popper } from "@/Popper";
export { DataGrid } from "@/DataGrid";
export { AdvancedDialog } from "@/AdvancedDialog";
export type { Task } from "@/ProgressSnackbar";
export type { Tooltip, Tooltips } from "@/tooltips";

export {
  CardContent,
  Box,
  RadioGroup,
  Typography,
  Menu,
  MenuItem,
  Grid,
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
  Button as MuiButton,
  ButtonGroup,
  Divider,
  Input,
  Select,
  Card as MuiCard,
  IconButton as MuiIconbutton,
  Popover as MuiPopover,
  CssBaseline,
  Toolbar,
  List,
  ListItem,
  Container,
  ThemeProvider,
  AppBar,
  ListItemText,
  StyledEngineProvider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

export type { GridRenderCellParams, GridColDef } from "@mui/x-data-grid";

export const generateClassName =
  (prefix: string) =>
  (rule: Record<"key", string>): string =>
    `${prefix}-${rule.key}-${Math.floor(Math.random() * 10e9)}`;
