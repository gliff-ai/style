import { ReactElement, SyntheticEvent } from "react";
import {
  Snackbar,
  SnackbarContent,
  SlideProps,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import { theme } from "./theme";

const useStyle = makeStyles(() => ({
  snackbar: {
    background: theme.palette.info.light,
  },
}));

type TransitionProps = Omit<SlideProps, "direction">;

interface Props {
  open: boolean;
  handleClose: (event: SyntheticEvent | MouseEvent, reason?: string) => void;
  message: ReactElement;
}

function BaseSnackbar(props: Props): ReactElement {
  const classes = useStyle();

  return (
    <ThemeProvider theme={theme}>
      <Snackbar open={props.open} onClose={props.handleClose}>
        <SnackbarContent className={classes.snackbar} message={props.message} />
      </Snackbar>
    </ThemeProvider>
  );
}

export { BaseSnackbar };
export type { Props as BaseSnackbarProps, TransitionProps };
