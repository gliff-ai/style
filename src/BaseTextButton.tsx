import { MouseEvent, ReactElement } from "react";
import { makeStyles, ThemeProvider, Button } from "@material-ui/core";
import { theme } from "./theme";

interface Props {
  text: string;
  onClick?: (event: MouseEvent) => void;
}

export const BaseTextButton = (props: Props): ReactElement => {
  const classes = makeStyles({
    makeButton: {
      "&:hover": {
        backgroundColor: theme.palette.info.main,
      },
    },
  })();

  return (
    <ThemeProvider theme={theme}>
      <Button
        className={classes.makeButton}
        variant="contained"
        color="primary"
        onClick={props.onClick}
      >
        {props.text}
      </Button>
    </ThemeProvider>
  );
};

BaseTextButton.defaultProps = {
  onClick: null,
};
