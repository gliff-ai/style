import { MouseEvent, ReactElement } from "react";
import {
  ThemeProvider,
  Theme,
  StyledEngineProvider,
  Button,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import type { ButtonProps } from "@mui/material/Button";
import { theme } from "./theme";

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

interface Props extends ButtonProps {
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
    <StyledEngineProvider injectFirst>
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
    </StyledEngineProvider>
  );
};

BaseTextButton.defaultProps = {
  onClick: null,
  disabled: false,
};
