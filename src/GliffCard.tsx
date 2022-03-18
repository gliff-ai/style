import { CSSProperties } from "react";
import { Card, IconButton, Paper, Typography } from "@mui/material";
import SVG from "react-inlinesvg";
import makeStyles from "@mui/styles/makeStyles";
import { theme } from "./theme";
import { icons } from "./icons";

interface Props {
  title: string;
  el: JSX.Element;
  action?: {
    icon?: string;
    tooltip?: string;
    onClick?: () => void;
  };
}

const useStyles = makeStyles({
  closeButton: {
    position: "absolute",
    top: "7px",
    right: "5px",
  },

  closeIcon: { width: "15px" },

  paperHeader: {
    padding: "10px",
    backgroundColor: theme.palette.primary.main,
    position: "relative",
  },
  headerTypography: {
    fontSize: "21px",
    width: "240px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

export function GliffCard(props: Props): JSX.Element {
  const classes = useStyles();

  const action = !props.action ? null : (
    <IconButton
      className={classes.closeButton}
      onClick={props.action.onClick}
      size="small"
    >
      <SVG src={icons.removeLabel} className={classes.closeIcon} />
    </IconButton>
  );

  return (
    <>
      <Card style={{ borderRadius: "9px" }}>
        <Paper
          elevation={0}
          variant="outlined"
          square
          className={classes.paperHeader}
        >
          <Typography className={classes.headerTypography}>
            {props.title}
          </Typography>

          {action}
        </Paper>

        <Paper elevation={0} square style={{ padding: "20px" }}>
          {props.el}
        </Paper>
      </Card>
    </>
  );
}

GliffCard.defaultProps = {
  action: null,
};
