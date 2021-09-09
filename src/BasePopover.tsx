import { ReactElement, useState, MouseEvent } from "react";
import { makeStyles, Popover, TooltipProps } from "@material-ui/core";
import { BaseIconButton } from "./BaseIconButton";
import { Tooltip } from "./interface";

const useStyle = makeStyles(() => ({
  popoverPaper: {
    padding: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

interface Props {
  tooltip: Tooltip;
  tooltipPlacement?: TooltipProps["placement"];
  enabled?: boolean;
  childrens?: JSX.Element[] | null;
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

  return (
    <>
      <BaseIconButton
        tooltip={props.tooltip}
        onClick={handleClick}
        enabled={props.enabled}
        tooltipPlacement={props.tooltipPlacement}
      />
      <Popover
        id={`popover-${props.tooltip.name}`}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        classes={{ paper: classes.popoverPaper }}
      >
        {props.childrens}
      </Popover>
    </>
  );
}

BasePopover.defaultProps = {
  enabled: false,
  tooltipPlacement: "right",
  childrens: null,
};
