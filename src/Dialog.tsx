import { ReactElement, useState, cloneElement } from "react";

import {
  Card,
  Paper,
  Dialog as MaterialDialog,
  Typography,
  IconButton as MaterialIconButton,
} from "@mui/material";
import SVG from "react-inlinesvg";
import { theme } from "./theme";
import { icons } from "./icons";

interface Props {
  children?: JSX.Element[] | JSX.Element | null;
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
    <Card sx={{ borderRadius: "9px" }}>
      <Paper
        elevation={0}
        variant="outlined"
        square
        sx={{
          p: "10px",
          backgroundColor: theme.palette.primary.main,
          position: "relative",
        }}
      >
        <Typography
          sx={{
            fontSize: "21px",
            width: "240px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </Typography>
        <MaterialIconButton
          onClick={handleClose}
          size="small"
          sx={{ position: "absolute", top: "7px", right: "5px" }}
        >
          <SVG src={icons.removeLabel} width="15px" />
        </MaterialIconButton>
      </Paper>

      <Paper elevation={0} sx={{ p: "20px" }}>
        {children}
      </Paper>
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
};
