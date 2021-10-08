import { ReactElement } from "react";
import {
  Avatar,
  makeStyles,
  Box,
  Typography,
  ThemeProvider,
} from "@material-ui/core";

import { theme } from "./theme";
import type { Tooltip } from "./tooltips";

type Props = {
  tooltip: Omit<Tooltip, "icon">;
};

const useStyles = makeStyles({
  popoverAvatar: {
    backgroundColor: theme.palette.primary.main,
    color: "#2B2F3A",
    width: "30px",
    height: "30px",
  },
  mainbox: {
    display: "flex",
    alignItems: "center",
    justifyItems: "space-between",
  },

  spaceBetweenAvatar: {
    marginLeft: "3px",
  },
  avatarFontSize: {
    fontSize: "13px",
    lineHeight: "13px",
    fontWeight: 600,
  },
  avatarSmallFontSize: {
    fontSize: "9px",
    lineHeight: "9px",
    fontWeight: 400,
  },
});

export const BaseTooltipTitle = ({ tooltip }: Props): ReactElement => {
  const classes = useStyles();

  const hasShortcutSymbol = tooltip.shortcutSymbol ? (
    <>
      <Avatar className={classes.popoverAvatar}>
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
      <div className={classes.spaceBetweenAvatar}>
        <Avatar className={classes.popoverAvatar}>
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
      </div>
    </>
  ) : (
    <Avatar className={classes.popoverAvatar}>{tooltip.shortcut}</Avatar>
  );

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.mainbox}>
        <Box mr={1} ml={1}>
          <Typography>{tooltip.name}</Typography>
        </Box>
        {!tooltip.shortcut ? null : hasShortcutSymbol}
      </Box>
    </ThemeProvider>
  );
};
