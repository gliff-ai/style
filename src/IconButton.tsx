import { ReactElement } from "react";
import { Avatar, TooltipProps, ThemeProvider, Theme, StyledEngineProvider, Button } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import type { ButtonProps } from "@mui/material/Button";
import SVG from "react-inlinesvg";
import { BaseTooltipTitle } from "./BaseTooltipTitle";
import { HtmlTooltip } from "./BaseHtmlTooltip";
import { theme } from "./theme";


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


export interface Tooltip {
  name: string;
  shortcut?: string;
  shortcutSymbol?: string;
}

export interface Props extends ButtonProps {
  component?: any;
  to?: string;
  tooltip: Tooltip;
  icon: string;
  fill?: boolean;
  disabled?: boolean;
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
    noHover: {
      "&:hover": {
        backgroundColor: "inherit",
      },
      "&:hover svg": {
        fill: "#BBB",
      },
    },
  })(props);

  const {
    icon,
    tooltip,
    fill,
    tooltipPlacement,
    disabled,
    setRefCallback,
    ...rest
  } = props;

  let color = null;

  if (disabled) {
    color = "#BBB";
  } else if (fill) {
    color = theme.palette.primary.main;
  }

  const svgIcon = <SVG src={icon} className={classes.svg} fill={color} />;

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
                className={`${
                  props.size === "small" ? classes.small : classes.medium
                } ${props.disabled ? classes.noHover : ""}`}
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
} as Props;
