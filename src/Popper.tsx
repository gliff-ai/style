import {
  Popper as MaterialPopper,
  ClickAwayListener,
  PopperPlacementType,
  PopperProps,
} from "@mui/material";

interface Props extends PopperProps {
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  placement: PopperPlacementType;
  el: JSX.Element;
  handleClickAway?: () => void;
  offset: [number, number];
}

export function Popper(props: Props): JSX.Element {
  return (
    <ClickAwayListener onClickAway={props.handleClickAway}>
      <MaterialPopper
        open={props.open}
        anchorEl={props.anchorEl}
        style={{ display: "flex" }}
        placement={props.placement}
        modifiers={[
          {
            name: "offset",
            options: {
              offset: props.offset,
            },
          },
        ]}
      >
        {props.el}
      </MaterialPopper>
    </ClickAwayListener>
  );
}

Popper.defaultProps = {
  handleClickAway: null,
};
