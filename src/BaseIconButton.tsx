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
import type { ButtonProps } from "@material-ui/core/Button";
import { BaseTooltipTitle } from "./BaseTooltipTitle";
import { HtmlTooltip } from "./BaseHtmlTooltip";
import { theme } from "./theme";
import { Tooltip } from "./interface";

interface Props extends ButtonProps {
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
}

const BaseIconButton = ({
  tooltip,
  onClick,
  onMouseDown,
  onMouseUp,
  fill,
  buttonSize,
  buttonEdge,
  tooltipPlacement,
  setRefCallback,
  hasAvatar,
  enabled,
  component,
  type,
  iconColor,
  ...rest
}: Props): ReactElement => {
  const classes = makeStyles({
    iconButton: {
      marginBottom: "5px",
      marginTop: "7px",
    },
    svg: {
      width: buttonSize === "medium" ? "45px" : "20px",
      height: "auto",
      color: iconColor,
    },
  })({ buttonSize, iconColor });

  const svgIcon = (
    <SVG
      src={tooltip.icon}
      className={classes.svg}
      fill={fill ? iconColor : null}
    />
  );

  return (
    <ThemeProvider theme={theme}>
      <HtmlTooltip
        key={tooltip.name}
        title={
          tooltip?.icon ? <BaseTooltipTitle tooltip={tooltip} /> : tooltip.name
        }
        placement={tooltipPlacement}
      >
        {component === "span" ? (
          <Button
            className={classes.iconButton}
            component="span"
            onClick={onClick}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
          >
            {hasAvatar && enabled ? <Avatar>{svgIcon}</Avatar> : <>{svgIcon}</>}
          </Button>
        ) : (
          <IconButton
            type={type}
            ref={(ref) => {
              if (!ref || !setRefCallback) return;
              setRefCallback(ref);
            }}
            className={classes.iconButton}
            onMouseUp={onMouseUp}
            onMouseDown={onMouseDown}
            onClick={onClick}
            size={buttonSize}
            edge={buttonEdge}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
          >
            {hasAvatar && enabled ? <Avatar>{svgIcon}</Avatar> : <>{svgIcon}</>}
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
};

export { Props as BaseIconButtonProps, BaseIconButton };
