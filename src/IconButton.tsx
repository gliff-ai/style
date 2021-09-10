import { MouseEvent, ReactElement } from "react";
import {
  IconButton as MaterialIconButton,
  Avatar,
  makeStyles,
  TooltipProps,
  ThemeProvider,
  Button,
} from "@material-ui/core";
import type {IconButtonProps} from "@material-ui/core/IconButton";
import SVG from "react-inlinesvg";
import { BaseTooltipTitle } from "./BaseTooltipTitle";
import { HtmlTooltip } from "./BaseHtmlTooltip";
import { theme } from "./theme";

export interface Tooltip {
  name: string;
  shortcut?: string;
  shortcutSymbol?: string;
}

interface Props extends IconButtonProps {
  tooltip: Tooltip;
  onClick?: (event: MouseEvent) => void;
  onMouseDown?: (event: MouseEvent) => void;
  onMouseUp?: (event: MouseEvent) => void;
  fill?: boolean;
  tooltipPlacement?: TooltipProps["placement"];
  setRefCallback?: (ref: HTMLButtonElement) => void;
  enabled?: boolean;
  icon?: string;
}

export const IconButton = (props: Props): ReactElement => {
  const classes = makeStyles({
    svg: {
      width: props.size === "small" ? "23px" : "45px",
      height: "auto",
    },
    small: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
    medium: {
      width: theme.spacing(9),
      height: theme.spacing(9),
    },
  })(props);

  const svgIcon = (
    <SVG
      src={props.icon}
      className={classes.svg}
      fill={props.fill ? theme.palette.primary.main : null}
    />
  );

  return (
    <ThemeProvider theme={theme}>
      <HtmlTooltip
        key={props.tooltip.name}
        title={
          props.icon ? (
            <BaseTooltipTitle tooltip={props.tooltip} />
          ) : (
            props.tooltip.name
          )
        }
        placement={props.tooltipPlacement}
      >
          <MaterialIconButton
            ref={(ref) => {
              if (!ref || !props.setRefCallback) return;
              props.setRefCallback(ref);
            }}
            {...props}
          >
              <Avatar className={props.size === "small" ? classes.small : classes.medium}>{svgIcon}</Avatar>
          </MaterialIconButton>
      </HtmlTooltip>
    </ThemeProvider>
  );
};

IconButton.defaultProps = {
  size: "small"
};
