import { ReactElement, useState, cloneElement, useEffect } from "react";
import { Box, Dialog as MaterialDialog, Typography } from "@mui/material";
import { Card } from "../Card/Card";
import { Button } from "../Button/Button";

interface Props {
  children?: ReactElement | null;
  TriggerButton: JSX.Element;
  title: string;
  warningDialog?: boolean;
  close?: boolean;
  afterClose?: () => void;
  buttons?: boolean;
}

export function Dialog({
  children,
  title,
  TriggerButton,
  close,
  warningDialog,
  afterClose,
  buttons,
}: Props): ReactElement | null {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
    // Reset defaults when Dialog is closed
    if (afterClose) {
      afterClose();
    }
  };

  // externally close the Dialog
  useEffect(() => {
    if (close) {
      setOpen(false);
    }
  }, [close]);

  const dialogContent = (
    <>
      <Card
        title={title}
        handleClose={handleClose}
        closeButton
        warningDialog={warningDialog}
      >
        <>
          <Typography>{children}</Typography>

          {buttons && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "60px",
              }}
            >
              <Button text="Button" color="secondary" variant="outlined" />
              <Button
                text="Button"
                color={warningDialog ? "secondary" : "primary"}
              />
            </Box>
          )}
        </>
      </Card>
    </>
  );

  return (
    <>
      {cloneElement(TriggerButton, {
        onClick: () => {
          handleClick();
          const { onClick } = TriggerButton.props as { onClick?: () => void };
          if (onClick) onClick();
        },
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
  afterClose: null,
  warningDialog: null,
  buttons: false,
};
