import { ReactElement, useState, cloneElement, useEffect } from "react";
import { Dialog as MaterialDialog } from "@mui/material";
import { Card } from "./Card";

interface Props {
  children?: ReactElement | null;
  TriggerButton: JSX.Element;
  title: string;
  warningDialog?: boolean;
  close?: boolean;
  resetDefaults?: () => void;
}

export function Dialog({
  children,
  title,
  TriggerButton,
  close,
  warningDialog,
  resetDefaults,
}: Props): ReactElement | null {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
    // Reset defaults when Dialog is closed
    if (resetDefaults) {
      resetDefaults();
    }
  };

  // externally close the Dialog
  useEffect(() => {
    if (close) {
      setOpen(false);
    }
  }, [close]);

  const dialogContent = (
    <Card
      title={title}
      handleClose={handleClose}
      closeButton
      warningDialog={warningDialog}
    >
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
