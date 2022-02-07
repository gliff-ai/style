import { Tooltip } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import { veryLightBlue, white, darkGrey, theme } from "./theme";

export const HtmlTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: `${white} !important`,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid",
    borderColor: veryLightBlue,
    color: `${darkGrey} !important`,
    maxWidth: "100% !important",
    padding: "6px",
    width: "auto",
  },
}))(Tooltip);
