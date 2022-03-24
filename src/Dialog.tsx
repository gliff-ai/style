import {
  ReactElement,
  useState,
  MouseEvent,
  useEffect,
  cloneElement,
} from "react";
import {
  Card,
  Paper,
  Popover,
  PopoverOrigin,
  Typography,
  IconButton as MaterialIconButton,
} from "@mui/material";
import SVG from "react-inlinesvg";
import { theme } from "./theme";
import { icons } from "./icons";

export const imgSrc = (src: string, type = "svg"): string =>
  new URL(`/src/assets/${src}.${type}`, import.meta.url).href;

interface Props {
  children?: JSX.Element[] | JSX.Element | null;
  anchorOrigin?: PopoverOrigin;
  transformOrigin?: PopoverOrigin;
  triggerClosing?: number | null;
  TriggerButton: JSX.Element;
  title: string;
}

export function Dialog({
  children,
  anchorOrigin,
  transformOrigin,
  triggerClosing,
  title,
  TriggerButton,
}: Props): ReactElement | null {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setAnchorEl(null);
  }, [triggerClosing]);

  const popoverContent = (
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
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
      >
        {popoverContent}
      </Popover>
    </>
  );
}

Dialog.defaultProps = {
  children: null,
  anchorOrigin: {
    vertical: "top",
    horizontal: "left",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "left",
  },
  triggerClosing: null,
};
