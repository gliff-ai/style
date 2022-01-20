import { Tooltip } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import { veryLightBlue, white, darkGrey, theme } from "./theme";

export const HtmlTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: white,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid",
    borderColor: veryLightBlue,
    color: darkGrey,
    maxWidth: "100%",
    padding: "6px",
  },
}))(Tooltip);
