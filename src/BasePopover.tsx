import { ReactElement, useState, MouseEvent, useEffect } from "react";
import { makeStyles, Popover, PopoverOrigin } from "@material-ui/core";
import { BaseIconButton, BaseIconButtonProps } from "./BaseIconButton";

const useStyle = makeStyles(() => ({
  popoverPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
}));

interface Props extends BaseIconButtonProps {
  children?: JSX.Element[] | JSX.Element | null;
  anchorOrigin?: PopoverOrigin;
  transformOrigin?: PopoverOrigin;
  triggerClosing?: number | null;
  enabled?: boolean;
}

export function BasePopover(props: Props): ReactElement | null {
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    if (props.enabled) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setAnchorEl(null);
  }, [props.triggerClosing]);

  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <BaseIconButton {...props} onClick={handleClick} />
      <Popover
        id={`popover-${props.tooltip.name}`}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={props.anchorOrigin}
        transformOrigin={props.transformOrigin}
        classes={{ paper: classes.popoverPaper }}
      >
        {props.children}
      </Popover>
    </>
  );
}

BasePopover.defaultProps = {
  childrens: null,
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
