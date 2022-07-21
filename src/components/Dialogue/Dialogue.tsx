import {
  ReactElement,
  useState,
  cloneElement,
  useEffect,
  MouseEvent,
} from "react";
import { Box, Dialog as MaterialDialog, Typography } from "@mui/material";
import { Card } from "../Card/Card";
import { Button } from "../Button/Button";
import { white } from "../../theme";

interface Props {
  children?: ReactElement | null;
  TriggerButton: JSX.Element;
  title: string;
  warningDialog?: boolean;
  close?: boolean;
  afterClose?: () => void;
  id?: string | null;
  backgroundColor?: string;
  onConfirm?: (event: MouseEvent) => void | null;
  confirmEnabled?: boolean;
}

export function Dialogue(props: Props): ReactElement | null {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
    // Reset defaults when Dialogue is closed
    if (props.afterClose) {
      props.afterClose();
    }
  };

  // externally close the Dialogue
  useEffect(() => {
    if (props.close) {
      setOpen(false);
    }
  }, [props.close]);

  const dialogContent = (
    <>
      <Card
        title={props.title}
        handleClose={handleClose}
        closeButton
        warningDialog={props.warningDialog}
        id={props.id}
        backgroundColor={props.backgroundColor}
      >
        <>
          <Typography>{props.children}</Typography>

          {props.onConfirm && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "60px",
              }}
            >
              <Button
                text="Cancel"
                color="secondary"
                variant="outlined"
                onClick={handleClose}
              />
              <Button
                text="Confirm"
                color={props.warningDialog ? "secondary" : "primary"}
                onClick={(e) => {
                  props.onConfirm(e);
                  handleClose();
                }}
                disabled={!props.confirmEnabled}
              />
            </Box>
          )}
        </>
      </Card>
    </>
  );

  return (
    <>
      {cloneElement(props.TriggerButton, {
        onClick: () => {
          handleClick();
          const { onClick } = props.TriggerButton.props as {
            onClick?: () => void;
          };
          if (onClick) onClick();
        },
      })}
      <MaterialDialog open={open} onClose={handleClose}>
        {dialogContent}
      </MaterialDialog>
    </>
  );
}

Dialogue.defaultProps = {
  children: null,
  close: null,
  afterClose: null,
  warningDialog: null,
  buttons: false,
  id: null,
  backgroundColor: white,
  onConfirm: null,
  confirmEnabled: true,
};
