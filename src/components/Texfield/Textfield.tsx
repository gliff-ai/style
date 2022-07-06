import { MouseEvent, ReactElement } from "react";
import { TextField as MuiTextfield, InputAdornment, IconButton, } from "@mui/material";
import type { OutlinedTextFieldProps } from "@mui/material/TextField";
import SVG from "react-inlinesvg";
import { icons } from "../../icons";

interface Props extends OutlinedTextFieldProps {
  onClick?: (event: MouseEvent) => void;
  label: string;
  icon?: boolean
}

export function TextField({
  onClick,
  label,
  icon,
  ...rest
}: Props): ReactElement {
  const iconAdornment = icon && 
             ( <InputAdornment position="end">
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
            ) 

  return <MuiTextfield {...rest} variant="outlined" label={label} InputProps={{
    endAdornment:(iconAdornment)
  }}
/>;
}

TextField.defaultProps = {
  onClick: null,
};
