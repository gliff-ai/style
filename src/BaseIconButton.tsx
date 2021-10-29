import { MouseEvent, ReactElement } from "react";
import {
  IconButton,
  Avatar,
  makeStyles,
  TooltipProps,
  ThemeProvider,
  Button,
} from "@material-ui/core";
import SVG from "react-inlinesvg";
import { BaseTooltipTitle } from "./BaseTooltipTitle";
import { HtmlTooltip } from "./BaseHtmlTooltip";
import { theme } from "./theme";
import { Tooltip } from "./interface";

interface Props {
  tooltip: Tooltip;
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
  component?: "span" | "button";
  type?: "button" | "submit";
  iconColor?: string;
  dataTestid?: string | null;
}

const BaseIconButton = (props: Props): ReactElement => {
  const classes = makeStyles({
    iconButton: {
      marginBottom: "5px",
      marginTop: "7px",
    },
    svg: {
      width: props.buttonSize === "medium" ? "45px" : "20px",
      height: "auto",
      color: props.iconColor,
    },
  })(props);

  const svgIcon = (
    <SVG
      src={props.tooltip.icon}
      className={classes.svg}
      fill={props.fill ? props.iconColor : null}
    />
  );

  return (
    <ThemeProvider theme={theme}>
      <HtmlTooltip
        key={props.tooltip.name}
        title={
          props.tooltip?.icon ? (
            <BaseTooltipTitle tooltip={props.tooltip} />
          ) : (
            props.tooltip.name
          )
        }
        placement={props.tooltipPlacement}
      >
        {props.component === "span" ? (
          <Button
            data-testid={props.dataTestid}
            className={classes.iconButton}
            component="span"
            onClick={props.onClick}
          >
            {props.hasAvatar && props.enabled ? (
              <Avatar>{svgIcon}</Avatar>
            ) : (
              <>{svgIcon}</>
            )}
          </Button>
        ) : (
          <IconButton
            data-testid={props.dataTestid}
            type={props.type}
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
        )}
      </HtmlTooltip>
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
  component: "button",
  type: "button",
  iconColor: theme.palette.primary.main,
  dataTestid: null,
};

export { Props as BaseIconButtonProps, BaseIconButton };
