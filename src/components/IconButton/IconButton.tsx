import { ReactElement } from "react";
import {
  Avatar,
  TooltipProps,
  ThemeProvider,
  StyledEngineProvider,
  Button,
} from "@mui/material";
import type { ButtonProps } from "@mui/material/Button";
import SVG from "react-inlinesvg";
import { BaseTooltipTitle } from "../../BaseTooltipTitle";
import { HtmlTooltip } from "../../BaseHtmlTooltip";
import { theme } from "../../theme";

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

  const avatar = {
    backgroundColor: props.backgroundColor,
    width: `${theme.spacing(avatarSpacing)} !important`,
    height: `${theme.spacing(avatarSpacing)} !important`,
  };

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

  const svgIcon = (
    <SVG
      src={icon}
      fill={fillColor}
      height="auto"
      width={props.size === "small" ? "23px" : "45px"}
    />
  );

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
              <Avatar sx={{ ...avatar }}>{svgIcon}</Avatar>
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
