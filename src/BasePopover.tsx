import { ReactElement, useState, MouseEvent, useEffect } from "react";
import { Popover, PopoverOrigin } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { BaseIconButton, BaseIconButtonProps } from "./BaseIconButton";

const useStyle = makeStyles(() => ({
  popoverPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: "9px",
  },
}));

interface Props extends BaseIconButtonProps {
  children?: JSX.Element[] | JSX.Element | null;
  anchorOrigin?: PopoverOrigin;
  transformOrigin?: PopoverOrigin;
  triggerClosing?: number | null;
  enabled?: boolean;
}

export function BasePopover({
  children,
  anchorOrigin,
  transformOrigin,
  triggerClosing,
  ...buttonProps
}: Props): ReactElement | null {
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    if (buttonProps.enabled) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setAnchorEl(null);
  }, [triggerClosing]);

  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <BaseIconButton {...buttonProps} onClick={handleClick} />
      <Popover
        id={`popover-${buttonProps.tooltip.name}`}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        classes={{ paper: classes.popoverPaper }}
      >
        {children}
      </Popover>
    </>
  );
}

BasePopover.defaultProps = {
  children: null,
  anchorOrigin: {
    vertical: "top",
    horizontal: "left",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "left",
  },
  enabled: true,
  triggerClosing: null,
};
