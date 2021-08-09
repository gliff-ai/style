import { MouseEvent, ReactElement } from "react";
import {
  Avatar,
  makeStyles,
  TooltipProps,
  Button,
  ThemeProvider,
} from "@material-ui/core";
import SVG from "react-inlinesvg";
import { theme } from "./theme";
import { Tooltip } from "./tooltips";
import { BaseTooltipTitle } from "./BaseTooltipTitle";
import { HtmlTooltip } from "./BaseHtmlTooltip";

interface Props {
  tooltip: Tooltip;
  onClick?: (event: MouseEvent) => void;
  onMouseDown?: (event: MouseEvent) => void;
  onMouseUp?: (event: MouseEvent) => void;
  fill: boolean;
  buttonSize?: "small" | "medium";
  tooltipPlacement?: TooltipProps["placement"];
  hasAvatar?: boolean;
}

export const BaseUploadButton = (props: Props): ReactElement => {
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
      <HtmlTooltip
        key={props.tooltip.name}
        classes={{
          tooltip: classes.tooltip,
        }}
        title={<BaseTooltipTitle tooltip={props.tooltip} />}
        placement={props.tooltipPlacement}
      >
        <Button
          component="span"
          className={classes.iconButton}
          onMouseUp={props.onMouseUp}
          onMouseDown={props.onMouseDown}
          onClick={props.onClick}
          size={props.buttonSize}
        >
          {props.hasAvatar ? <Avatar>{svgIcon}</Avatar> : <>{svgIcon}</>}
        </Button>
      </HtmlTooltip>
    </ThemeProvider>
  );
};

BaseUploadButton.defaultProps = {
  buttonSize: "small",
  tooltipPlacement: "right",
  onMouseUp: null,
  onMouseDown: null,
  onClick: null,
  hasAvatar: true,
};