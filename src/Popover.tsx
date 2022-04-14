import {
  ReactElement,
  useState,
  MouseEvent,
  useEffect,
  cloneElement,
} from "react";
import { Popover as MaterialPopover, PopoverOrigin } from "@mui/material";
import { Card } from "./Card";

export const imgSrc = (src: string, type = "svg"): string =>
  new URL(`/src/assets/${src}.${type}`, import.meta.url).href;

interface Props {
  children?: JSX.Element[] | JSX.Element | null;
  anchorOrigin?: PopoverOrigin;
  transformOrigin?: PopoverOrigin;
  triggerClosing?: number | null;
  TriggerButton: JSX.Element;
  title: string;
}

export function Popover({
  children,
  anchorOrigin,
  transformOrigin,
  triggerClosing,
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

  useEffect(() => {
    setAnchorEl(null);
  }, [triggerClosing]);

  const popoverContent = (
    <Card title={title} handleClose={handleClose} children={children} />
  );
  return (
    <>
      {cloneElement(TriggerButton as any, {
        onClick: handleClick,
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
  triggerClosing: null,
};
