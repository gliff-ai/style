import { ReactElement, useState, cloneElement, useEffect } from "react";
import { Dialog as MaterialDialog } from "@mui/material";
import { Card } from "./Card";

interface Props {
  children?: ReactElement | null;
  TriggerButton: JSX.Element;
  title: string;
  close?: boolean;
  resetDefaults?: () => void;
}

export function Dialog({
  children,
  title,
  TriggerButton,
  close,
  resetDefaults,
}: Props): ReactElement | null {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
    resetDefaults();
  };

  // externally close the Dialog
  useEffect(() => {
    if (close) {
      setOpen(false);
    }
  }, [close]);

  const dialogContent = (
    <Card title={title} handleClose={handleClose} closeButton>
      {children}
    </Card>
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
  close: null,
  resetDefaults: null,
};
