import { ReactElement } from "react";

import {
  Card as MaterialCard,
  Paper,
  Typography,
  IconButton as MaterialIconButton,
  CardProps,
} from "@mui/material";
import SVG from "react-inlinesvg";
import { theme } from "./theme";
import { icons } from "./icons";

interface Props extends CardProps {
  title: string;
  children: ReactElement;
  handleClose?: () => void;
  closeButton?: boolean;
}

export function Card(props: Props): JSX.Element {
  return (
    <MaterialCard
      sx={{
        borderRadius: "9px",
      }}
    >
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
          {props.title}
        </Typography>

        {props.closeButton && (
          <MaterialIconButton
            onClick={props.handleClose}
            size="small"
            sx={{ position: "absolute", top: "7px", right: "5px" }}
          >
            <SVG src={icons.removeLabel} width="15px" />
          </MaterialIconButton>
        )}
      </Paper>

      <Paper elevation={0} sx={{ p: "20px" }}>
        {props.children}
      </Paper>
    </MaterialCard>
  );
}
Card.defaultProps = {
  closeButton: false,
  handleClose: null,
};
