import { MouseEvent, ReactElement } from "react";
import { makeStyles, ThemeProvider, Button } from "@material-ui/core";
import { theme } from "./theme";

interface Props {
  text: string;
  onClick?: (event: MouseEvent) => void;
  disabled?: boolean;
}

export const BaseTextButton = ({
  text,
  onClick,
  disabled,
  ...rest
}: Props): ReactElement => {
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
        onClick={onClick}
        disabled={disabled}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      >
        {text}
      </Button>
    </ThemeProvider>
  );
};

BaseTextButton.defaultProps = {
  onClick: null,
  disabled: false,
};
