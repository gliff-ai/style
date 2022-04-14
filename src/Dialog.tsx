import { ReactElement, useState, cloneElement } from "react";

import { Dialog as MaterialDialog } from "@mui/material";

import { Card } from "./Card";

interface Props {
  children?: ReactElement | null;
  TriggerButton: JSX.Element;
  title: string;
}

export function Dialog({
  children,
  title,
  TriggerButton,
}: Props): ReactElement | null {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const dialogContent = (
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
      {cloneElement(TriggerButton as any, {
        onClick: handleClick,
      })}
      <MaterialDialog open={open} onClose={handleClose}>
        {dialogContent}
      </MaterialDialog>
    </>
  );
}

Dialog.defaultProps = {
  children: null,
};
