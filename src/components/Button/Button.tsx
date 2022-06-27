import { MouseEvent, ReactElement } from "react";
import {
  ThemeProvider,
  StyledEngineProvider,
  Button as MuiButton,
} from "@mui/material";
import type { ButtonProps } from "@mui/material/Button";
import { theme } from "../../theme";

interface Props extends ButtonProps {
  text: string;
  onClick?: (event: MouseEvent) => void;
  disabled?: boolean;
}

export function Button({
  text,
  onClick,
  disabled,
  ...rest
}: Props): ReactElement {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <MuiButton
          variant="contained"
          color="primary"
          onClick={onClick}
          disabled={disabled}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...rest}
        >
          {text}
        </MuiButton>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

Button.defaultProps = {
  onClick: null,
  disabled: false,
};
