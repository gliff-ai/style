import { ReactElement } from "react";

import {
  Card as MaterialCard,
  Paper,
  Typography,
  CardProps,
  styled,
} from "@mui/material";
import SVG from "react-inlinesvg";
import { theme } from "./theme";
import { icons } from "./icons";
import { IconButton } from "./IconButton";

interface Props extends CardProps {
  title: string;
  children: ReactElement;
  handleClose?: () => void;
  closeButton?: boolean;
  noPadding?: boolean;
  warningDialog?: boolean;
  isPinned?: boolean | null;
  handlePin?: () => void;
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
  return (
    <MaterialCard
      sx={{
        borderRadius: "6px",
        backgroundColor: props.backgroundColor,
      }}
    >
      <Paper
        elevation={0}
        variant="outlined"
        square
        sx={{
          p: "8px 16px",
          backgroundColor: props.warningDialog
            ? theme.palette.info.light
            : theme.palette.primary.main,
          position: "relative",
          borderRadius: "6px 6px 0 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
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
          />
        )}
        {props.closeButton && (
          <CardIconButton
            icon={icons.removeLabel}
            tooltip={{ name: "Close" }}
            onClick={props.handleClose}
            iconColor={props.warningDialog ? "#FFFFFF" : "#000000"}
          />
        )}
      </Paper>

      <Paper
        elevation={0}
        sx={{
          p: props.noPadding ? null : "12px 16px 14px",
          backgroundColor: "transparent",
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
  noPadding: null,
  warningDialog: null,
  isPinned: null,
  handlePin: null,
  backgroundColor: "#FFFFFF",
};
