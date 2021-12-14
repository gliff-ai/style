import { ReactElement } from "react";
import { Avatar, Box, Typography, ThemeProvider, Theme, StyledEngineProvider } from "@mui/material";

import makeStyles from '@mui/styles/makeStyles';

import { theme, darkGrey } from "./theme";
import type { Tooltip } from "./tooltips";


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


type Props = {
  tooltip: Omit<Tooltip, "icon">;
};

const useStyles = makeStyles({
  mainbox: {
    display: "flex",
    alignItems: "center",
    justifyItems: "space-between",
    "& > div:first-child": {
      // Tooltip text
      marginLeft: "8px",
      marginRight: "8px",
    },
    "& > div:not(:first-child)": {
      // shortcut icon
      backgroundColor: theme.palette.primary.main,
      color: darkGrey,
      width: "30px",
      height: "30px",
      marginLeft: "3px",
    },
    "& > div:nth-of-type(2)": {
      // First shortcut icon
      marginLeft: "4px",
    },
  },
  avatarFontSize: {
    fontSize: "14px",
    lineHeight: "14px",
    fontWeight: 600,
  },
  avatarSmallFontSize: {
    fontSize: "9px",
    lineHeight: "9px",
    fontWeight: 500,
  },
});

export const BaseTooltipTitle = ({ tooltip }: Props): ReactElement => {
  const classes = useStyles();

  const hasShortcutSymbol = tooltip.shortcutSymbol ? (
    <>
      <Avatar>
        <Typography
          className={
            tooltip.shortcutSymbol.length > 1
              ? classes.avatarSmallFontSize
              : classes.avatarFontSize
          }
        >
          {tooltip.shortcutSymbol.toUpperCase()}
        </Typography>
      </Avatar>

      <Avatar>
        <Typography
          className={
            tooltip.shortcut.length > 1
              ? classes.avatarSmallFontSize
              : classes.avatarFontSize
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
        <Box className={classes.mainbox}>
          <Box>
            <Typography>{tooltip.name}</Typography>
          </Box>
          {!tooltip.shortcut ? null : hasShortcutSymbol}
        </Box>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
