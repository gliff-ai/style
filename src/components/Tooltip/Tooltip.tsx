import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { veryLightBlue, white, darkGrey } from "../../theme";

export const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: `${white} !important`,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid",
    borderColor: veryLightBlue,
    color: `${darkGrey} !important`,
    maxWidth: "100% !important",
    padding: "6px",
    width: "auto",
  },
}));
