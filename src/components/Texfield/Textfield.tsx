import { MouseEvent, ReactElement } from "react";
import { TextField as MuiTextfield, InputAdornment, IconButton, } from "@mui/material";
import type { OutlinedTextFieldProps } from "@mui/material/TextField";
import SVG from "react-inlinesvg";
import { icons } from "../../icons";

interface Props extends OutlinedTextFieldProps {
  key: string;
  onClick?: (event: MouseEvent) => void;
  disabled?: boolean;
  closeButton?: boolean;
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
  return <MuiTextfield {...rest} key={key} variant="outlined" label={label} InputProps={{
     endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={onClick}
                  edge="end"
                  size="small"
                >
                <SVG
                  src={icons.contrast}
                  width="25px"
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
/>;
}

TextField.defaultProps = {
  onClick: null,
};
