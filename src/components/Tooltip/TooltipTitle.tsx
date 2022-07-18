import { ReactElement } from "react";
import {
  Avatar,
  Box,
  Typography,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material";
import SVG from "react-inlinesvg";
import { theme, darkGrey } from "../../theme";
import type { Tooltip } from "../../tooltips";

type Props = {
  tooltip: Tooltip;
};

const mainbox = {
  display: "flex",
  alignItems: "center",
  justifyItems: "space-between",
  height: "35px",
  "& > div:first-of-type": {
    // Tooltip text
    marginLeft: "8px",
    marginRight: "8px",
  },
  "& > div:not(:first-of-type)": {
    // shortcut icon
    backgroundColor: theme.palette.primary.main,
    color: darkGrey,
    width: "30px",
    height: "30px",
    marginLeft: "3px",
  },
  "& > div:nth-of-type(2)": {
    // First shortcut icon
    marginLeft: "10px",
  },
};

export const TooltipTitle = ({ tooltip }: Props): ReactElement => {
  const hasShortcutSymbol = tooltip.shortcutSymbol ? (
    <>
      <Avatar>
        <Typography
          sx={
            tooltip.shortcutSymbol.length > 1
              ? {
                  fontSize: "9px !important",
                  lineHeight: "9px !important",
                  fontWeight: 500,
                }
              : {
                  fontSize: "14px !important",
                  lineHeight: "14px !important",
                  fontWeight: 600,
                }
          }
        >
          {tooltip.shortcutSymbol.toUpperCase()}
        </Typography>
      </Avatar>
      <Avatar>
        <Typography
          sx={
            tooltip.shortcutSymbol.length > 1
              ? {
                  fontSize: "9px !important",
                  lineHeight: "9px !important",
                  fontWeight: 500,
                }
              : {
                  fontSize: "14px !important",
                  lineHeight: "14px !important",
                  fontWeight: 600,
                }
          }
        >
          {tooltip.shortcut.toUpperCase()}
        </Typography>
      </Avatar>
    </>
  ) : (
    <Avatar>{tooltip.shortcut}</Avatar>
  );

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Box sx={{ ...mainbox }}>
          <Box>
            <Typography
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {tooltip.name}
            </Typography>
          </Box>
          {tooltip?.icon && (
            <SVG src={tooltip?.icon} width="100%" height="24px" />
          )}
          {tooltip.shortcut && hasShortcutSymbol}
        </Box>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
