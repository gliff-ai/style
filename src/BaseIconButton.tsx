import React, { MouseEvent, ReactElement } from "react";
import {
  IconButton,
  Avatar,
  makeStyles,
  Tooltip,
  TooltipProps,
  ThemeProvider,
} from "@material-ui/core";
import SVG from "react-inlinesvg";
import { theme } from "./theme";
import { BaseTooltipTitle } from "./BaseTooltipTitle";
import { ToolTip } from "./interface";

interface Props {
  tooltip: ToolTip;
  onClick?: (event: MouseEvent) => void;
  onMouseDown?: (event: MouseEvent) => void;
  onMouseUp?: (event: MouseEvent) => void;
  fill?: boolean;
  buttonSize?: "small" | "medium";
  buttonEdge?: "start" | "end";
  tooltipPlacement?: TooltipProps["placement"];
  setRefCallback?: (ref: HTMLButtonElement) => void;
  hasAvatar?: boolean;
  enabled?: boolean;
}

export const BaseIconButton = (props: Props): ReactElement => {
  const classes = makeStyles({
    iconButton: {
      marginBottom: "5px",
      marginTop: "7px",
    },
    tooltip: {
      backgroundColor: "#FFFFFF",
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
      color: "#2B2F3A",
    },
    svg: {
      width: props.buttonSize === "medium" ? "45px" : "55%",
      height: "auto",
    },
  })(props);

  const svgIcon = (
    <SVG
      src={props.tooltip.icon}
      className={classes.svg}
      fill={props.fill ? theme.palette.primary.main : null}
    />
  );

  return (
    <ThemeProvider theme={theme}>
      <Tooltip
        key={props.tooltip.name}
        classes={{
          tooltip: classes.tooltip,
        }}
        title={
          props.tooltip?.icon ? (
            <BaseTooltipTitle tooltip={props.tooltip} />
          ) : (
            props.tooltip.name
          )
        }
        placement={props.tooltipPlacement}
      >
        <IconButton
          ref={(ref) => {
            if (!ref || !props.setRefCallback) return;
            props.setRefCallback(ref);
          }}
          className={classes.iconButton}
          onMouseUp={props.onMouseUp}
          onMouseDown={props.onMouseDown}
          onClick={props.onClick}
          size={props.buttonSize}
          edge={props.buttonEdge}
        >
          {props.hasAvatar && props.enabled ? (
            <Avatar>{svgIcon}</Avatar>
          ) : (
            <>{svgIcon}</>
          )}
        </IconButton>
      </Tooltip>
    </ThemeProvider>
  );
};

BaseIconButton.defaultProps = {
  buttonSize: "small",
  buttonEdge: "start",
  tooltipPlacement: "right",
  setRefCallback: null,
  onMouseUp: null,
  onMouseDown: null,
  onClick: null,
  hasAvatar: true,
  enabled: true,
  fill: false,
};
