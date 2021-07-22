import { ReactElement, ComponentType } from "react";
import {
  Snackbar,
  SnackbarContent,
  SlideProps,
  Theme,
  makeStyles,
} from "@material-ui/core";

const useStyle = makeStyles((theme: Theme) => ({
  snackbar: {
    background: theme.palette.info.light,
  },
}));

type TransitionProps = Omit<SlideProps, "direction">;

interface Props {
  open: boolean;
  handleClose: () => void;
  message: ReactElement;
  transition?: ComponentType<TransitionProps> | null;
}

function BaseSnackbar(props: Props): ReactElement {
  const classes = useStyle();
  return (
    <Snackbar
      open={props.open}
      onClose={props.handleClose}
      TransitionComponent={props?.transition}
    >
      <SnackbarContent className={classes.snackbar} message={props.message} />
    </Snackbar>
  );
}

BaseSnackbar.defaultProps = {
  transition: null,
};

export { BaseSnackbar, Props as BaseSnackbarProps, TransitionProps };
