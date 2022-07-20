/* eslint-disable react/jsx-props-no-spreading */
import { Dialog, DialogProps } from "@mui/material";
import { ReactElement } from "react";
import { Card } from "@/components";

interface Props extends DialogProps {
  title: string;
  closeButton?: boolean;
  warningDialog?: boolean;
  onClose?: () => void;
}

export function AdvancedDialog({
  onClose: handleClose,
  closeButton,
  warningDialog,
  ...props
}: Props): ReactElement {
  return (
    <>
      <Dialog {...props} onClose={handleClose}>
        <Card
          title={props.title}
          warningDialog={warningDialog}
          closeButton
          handleClose={handleClose}
        >
          <>{props.children}</>
        </Card>
      </Dialog>
    </>
  );
}

AdvancedDialog.defaultProps = {
  warningDialog: null,
  closeButton: null,
  onClose: null,
};
