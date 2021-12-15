import { Tooltip, Theme } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import { veryLightBlue, white } from "./theme";

export const HtmlTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: white,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid",
    borderColor: veryLightBlue,
    color: theme.palette.text.primary,
    maxWidth: "100%",
    padding: "6px",
  },
}))(Tooltip);
