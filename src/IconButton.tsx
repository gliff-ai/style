import { ReactElement } from "react";
import {
  Avatar,
  makeStyles,
  TooltipProps,
  ThemeProvider,
  Button,
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

export interface Props
  extends Pick<IconButtonProps, "size" | "disabled" | "type" | "onClick"> {
  tooltip: Tooltip;
  icon: string;
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

  const { icon, tooltip, fill, tooltipPlacement, setRefCallback, ...rest } =
    props;

  const svgIcon = (
    <SVG
      src={icon}
      className={classes.svg}
      fill={fill ? theme.palette.primary.main : null}
    />
  );

  return (
    <ThemeProvider theme={theme}>
      <HtmlTooltip
        key={tooltip.name}
        title={icon ? <BaseTooltipTitle tooltip={tooltip} /> : tooltip.name}
        placement={tooltipPlacement}
      >
        <Button
          ref={(ref) => {
            if (!ref || !setRefCallback) return;
            setRefCallback(ref);
          }}
          {...rest}
        >
          <Avatar
            className={props.size === "small" ? classes.small : classes.medium}
          >
            {svgIcon}
          </Avatar>
        </Button>
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
