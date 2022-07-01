import { MouseEvent, ReactElement } from "react";
import { TextField as MuiTextfield, Avatar } from "@mui/material";
import type { OutlinedTextFieldProps } from "@mui/material/TextField";
import SVG from "react-inlinesvg";
import { icons } from "../../icons";
import { theme } from "../../theme";

interface Props extends OutlinedTextFieldProps {
  key: string;
  onClick?: (event: MouseEvent) => void;
  disabled?: boolean;
  closeButton?: boolean;
  //  data-testid?: string;
  label: string;
}

export function TextField({
  key,
  onClick,
  disabled,
  label,
  closeButton,
  ...rest
}: Props): ReactElement {
  return <MuiTextfield key={key} variant="outlined" label={label} />;
}

TextField.defaultProps = {
  onClick: null,
  disabled: false,
  closeButton: true,
};
