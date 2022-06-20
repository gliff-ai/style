import { ReactElement, useState, MouseEvent, cloneElement } from "react";
import { Popover as MaterialPopover, PopoverOrigin } from "@mui/material";
import { Card } from "./Card";

export const imgSrc = (src: string, type = "svg"): string =>
  new URL(`/src/assets/${src}.${type}`, import.meta.url).href;

interface Props {
  children?: ReactElement | null;
  anchorOrigin?: PopoverOrigin;
  transformOrigin?: PopoverOrigin;
  TriggerButton: JSX.Element;
  title: string;
}

export function Popover({
  children,
  anchorOrigin,
  transformOrigin,
  title,
  TriggerButton,
}: Props): ReactElement | null {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const popoverContent = (
    <Card
      title={title}
      handleClose={handleClose}
      // eslint-disable-next-line react/no-children-prop
      children={children}
      closeButton
    />
  );
  return (
    <>
      {cloneElement(TriggerButton, {
        onClick: (event: MouseEvent<HTMLButtonElement>) => {
          handleClick(event);
          const { onClick } = TriggerButton.props as { onClick?: () => void };
          if (onClick) onClick();
        },
        fill: Boolean(anchorEl),
      })}
      <MaterialPopover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
      >
        {popoverContent}
      </MaterialPopover>
    </>
  );
}

Popover.defaultProps = {
  children: null,
  anchorOrigin: {
    vertical: "top",
    horizontal: "left",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "left",
  },
};
