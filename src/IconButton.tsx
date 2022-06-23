import { ReactElement } from "react";
import {
  Avatar,
  TooltipProps,
  ThemeProvider,
  StyledEngineProvider,
  Button,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import type { ButtonProps } from "@mui/material/Button";
import SVG from "react-inlinesvg";
import { BaseTooltipTitle } from "./BaseTooltipTitle";
import { HtmlTooltip } from "./BaseHtmlTooltip";
import { theme } from "./theme";

export interface Tooltip {
  name: string;
  shortcut?: string;
  shortcutSymbol?: string;
  icon?: string;
}

export interface Props extends ButtonProps {
  component?: any;
  to?: string;
  tooltip: Tooltip;
  icon: string;
  fill?: boolean;
  disabled?: boolean;
  iconColor?: string;
  backgroundColor?: string;
  tooltipPlacement?: TooltipProps["placement"];
  setRefCallback?: (ref: HTMLButtonElement) => void;
}

export const IconButton = (props: Props): ReactElement => {
  const avatarSpacing = props.size === "small" ? 5 : 9;
  let fillColor = props.iconColor;
  if (props.disabled) {
    fillColor = "#BBB";
  } else if (props.fill) {
    fillColor = theme.palette.primary.main;
  }

  const classes = makeStyles({
    svg: {
      width: props.size === "small" ? "23px" : "45px",
      height: "auto",
    },
    avatar: {
      backgroundColor: props.backgroundColor,
      width: `${theme.spacing(avatarSpacing)} !important`,
      height: `${theme.spacing(avatarSpacing)} !important`,
    },
    noHover: {
      "&:hover": {
        backgroundColor: props.backgroundColor,
      },
      "&:hover svg": {
        fill: fillColor,
      },
    },
  })(props);

  const {
    icon,
    tooltip,
    fill,
    tooltipPlacement,
    disabled,
    iconColor,
    backgroundColor,
    setRefCallback,
    ...rest
  } = props;

  const svgIcon = <SVG src={icon} className={classes.svg} fill={fillColor} />;
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <HtmlTooltip
          key={tooltip.name}
          title={icon ? <BaseTooltipTitle tooltip={tooltip} /> : tooltip.name}
          placement={tooltipPlacement}
        >
          <span>
            <Button
              disabled={disabled}
              ref={(ref) => {
                if (!ref || !setRefCallback) return;
                setRefCallback(ref);
              }}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...rest}
            >
              <Avatar
                className={`${classes.avatar} ${
                  props.disabled ? classes.noHover : ""
                }`}
              >
                {svgIcon}
              </Avatar>
            </Button>
          </span>
        </HtmlTooltip>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

IconButton.defaultProps = {
  size: "small",
  disabled: false,
  tooltipPlacement: "right",
  setRefCallback: null,
  onClick: null,
  fill: false,
  type: "button",
  component: "button",
  to: null,
  iconColor: "inherit",
  backgroundColor: "inherit",
} as Props;
