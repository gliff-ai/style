import { MouseEvent, ReactElement } from "react";
import {
  IconButton as MaterialIconButton,
  Avatar,
  makeStyles,
  TooltipProps,
  ThemeProvider,
} from "@material-ui/core";
import type { IconButtonProps } from "@material-ui/core/IconButton";
import SVG from "react-inlinesvg";
import { BaseTooltipTitle } from "./BaseTooltipTitle";
import { HtmlTooltip } from "./BaseHtmlTooltip";
import { theme } from "./theme";

export interface Tooltip {
  name: string;
  shortcut?: string;
  shortcutSymbol?: string;
}

export interface Props extends Pick<IconButtonProps, "size" | "disabled" | "type"> {
  tooltip: Tooltip;
  icon: string;
  onClick?: (event: MouseEvent) => void;
  fill?: boolean;
  tooltipPlacement?: TooltipProps["placement"];
  setRefCallback?: (ref: HTMLButtonElement) => void;
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
          size={props.size}
          disabled={props.disabled}
          type={props.type}
          onClick={props.onClick}
        >
          <Avatar
            className={props.size === "small" ? classes.small : classes.medium}
          >
            {svgIcon}
          </Avatar>
        </MaterialIconButton>
      </HtmlTooltip>
    </ThemeProvider>
  );
};

IconButton.defaultProps = {
  size: "small",
  tooltipPlacement: "right",
  setRefCallback: null,
  onClick: null,
  fill: false,
  type: "button",
} as Props;
