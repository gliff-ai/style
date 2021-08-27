import { ReactElement, ComponentType } from "react";
import {
  Snackbar,
  SnackbarContent,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";

import type { SlideProps } from "@material-ui/core";
import { theme } from "./theme";

const useStyle = makeStyles(() => ({
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
    <ThemeProvider
      theme={theme}
      children={
        <Snackbar
          open={props.open}
          onClose={props.handleClose}
        >
          <SnackbarContent
            className={classes.snackbar}
            message={props.message}
          />
        </Snackbar>
      }
    />
  );
}

BaseSnackbar.defaultProps = {
  transition: null,
};

export { BaseSnackbar };
export type { Props as BaseSnackbarProps, TransitionProps };
