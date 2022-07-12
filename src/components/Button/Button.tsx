import { MouseEvent, ReactElement } from "react";
import { Button as MuiButton } from "@mui/material";
import type { ButtonProps } from "@mui/material/Button";

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
    <MuiButton
      variant="contained"
      color="primary"
      onClick={onClick}
      disabled={disabled}
      disableElevation
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {text}
    </MuiButton>
  );
}

Button.defaultProps = {
  onClick: null,
  disabled: false,
};
