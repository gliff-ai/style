import { ReactElement } from "react";

import { Card as MaterialCard, Paper, Typography, styled } from "@mui/material";
import SVG from "react-inlinesvg";
import { theme, white } from "../../theme";
import { icons } from "../../icons";
import { IconButton } from "../../IconButton";

interface Props {
  title: string;
  children: ReactElement;
  handleClose?: () => void;
  closeButton?: boolean;
  internalPadding?: boolean;
  warningDialog?: boolean;
  isPinned?: boolean | null;
  handlePin?: () => void;
  id?: string | null;
  backgroundColor?: string;
}

const CardIconButton = styled(IconButton)({
  minWidth: 0,
  padding: 0,
  "& svg": {
    width: "15px",
    height: "auto",
  },
  "& div": {
    width: "30px !important",
    height: "30px !important",
    "&:hover": { backgroundColor: "#FFFFFF" },
  },
});

export function Card(props: Props): JSX.Element {
  let id: string;
  if (props.id === null || props.id === undefined) {
    id = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substr(0, 5);
  } else {
    id = props.id;
  }
  return (
    <MaterialCard sx={{ borderRadius: "8px" }}>
      <Paper
        elevation={0}
        sx={{
          p: "8px 16px",
          backgroundColor: props.warningDialog
            ? theme.palette.info.light
            : theme.palette.primary.main,
          position: "relative",
          borderRadius: "8px 8px 0 0",
          display: "flex",
          alignItems: "center",
          height: "27px",
          justifyContent: "space-between",
          "button:last-child": {
            marginRight: "-8px",
          },
          border: `1px solid ${props.warningDialog ? "#9F6DEA" : "#02E098"}`,
        }}
      >
        {props.warningDialog && (
          <SVG src={icons.warning} width="25px" fill="#FFFFFF" />
        )}
        <Typography
          sx={{
            fontSize: "18px",
            width: "240px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontWeight: 500,
            color: props.warningDialog ? "#FFFFFF" : "none",
            marginLeft: props.warningDialog ? "10px" : "none",
          }}
        >
          {props.title}
        </Typography>
        {props.isPinned !== null && (
          <CardIconButton
            icon={icons.pin}
            backgroundColor={props.isPinned ? "#FFFFFF" : "inherit"}
            tooltip={{ name: props.isPinned ? "Turn Off Pin" : "Pin Open" }}
            onClick={props.handlePin}
            id={`${id}-dailog-pin`}
          />
        )}
        {props.closeButton && (
          <CardIconButton
            icon={icons.removeLabel}
            tooltip={{ name: "Close" }}
            onClick={props.handleClose}
            iconColor={props.warningDialog ? "#FFFFFF" : "#000000"}
            id={`${id}-dailog-close`}
          />
        )}
      </Paper>

      <Paper
        elevation={0}
        sx={{
          p: props.internalPadding ? null : "12px 16px 14px",
          borderRadius: "0px 0px 8px 8px",
          border: "1px solid #d9dde9",
          borderTop: "none",
          backgroundColor: props.backgroundColor,
        }}
      >
        {props.children}
      </Paper>
    </MaterialCard>
  );
}
Card.defaultProps = {
  closeButton: false,
  handleClose: null,
  internalPadding: null,
  warningDialog: null,
  isPinned: null,
  handlePin: null,
  id: null,
  backgroundColor: white,
};
