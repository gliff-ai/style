import { MouseEvent, ReactElement } from "react";
import { Chip as MuiChip, Avatar } from "@mui/material";
import type { ChipProps } from "@mui/material/Chip";
import SVG from "react-inlinesvg";
import { icons } from "../../icons";
import { theme } from "../../theme";

interface Props extends ChipProps {
  key: string;
  onClick?: (event: MouseEvent) => void;
  disabled?: boolean;
  closeButton?: boolean;
  //  data-testid?: string;
  label: string;
}

export function Chip({
  key,
  onClick,
  disabled,
  label,
  closeButton,
  ...rest
}: Props): ReactElement {
  return (
    <MuiChip
      key={key}
      variant="outlined"
      avatar={
        closeButton ? (
          <Avatar
            variant="circular"
            sx={{ cursor: "pointer" }}
            onClick={onClick}
            data-testid="todo"
          >
            <SVG
              width="15px"
              src={icons.removeLabel}
              fill={theme.palette.text.secondary}
            />
          </Avatar>
        ) : null
      }
      label={label}
    />
  );
}

Chip.defaultProps = {
  onClick: null,
  disabled: false,
  closeButton: true,
};
