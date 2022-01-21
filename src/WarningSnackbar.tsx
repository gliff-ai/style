import { ReactElement } from "react";
import SVG from "react-inlinesvg";
import {
  IconButton,
  Snackbar,
  SnackbarContent,
  ThemeProvider,
  Theme,
  StyledEngineProvider,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { theme } from "./theme";

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

export const imgSrc = (src: string, type = "svg"): string =>
  new URL(`/src/assets/icons/${src}.${type}`, import.meta.url).href;

const useStyle = makeStyles(() => ({
  svgSmall: {
    width: "22px",
    height: "100%",
    marginLeft: "7px",
    marginRight: "9px",
    marginTop: "0px",
    marginBottom: "-4px",
    fill: theme.palette.primary.light,
  },
  message: {
    display: "inline-block",
    marginRight: "5px",
    marginLeft: "5px",
    fontSize: "16px",
  },
  iconButton: {
    color: theme.palette.primary.light,
  },
  svgSmallClose: {
    width: "15px",
    fill: theme.palette.primary.light,
  },
  snackbarContent: {
    backgroundColor: theme.palette.info.light,
  },
}));

interface Props {
  open: boolean;
  onClose: () => void;
  messageText: string | ReactElement;
}

function WarningSnackbar({ open, onClose, messageText }: Props): ReactElement {
  const classes = useStyle();
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Snackbar
          open={open}
          onClose={onClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <div>
            <SnackbarContent
              className={classes.snackbarContent}
              message={
                <span>
                  <SVG src={imgSrc("warning")} className={classes.svgSmall} />

                  <div className={classes.message}>{messageText}</div>
                </span>
              }
              action={[
                <IconButton
                  size="small"
                  aria-label="close"
                  onClick={onClose}
                  className={classes.iconButton}
                  key="1"
                >
                  <SVG
                    src={imgSrc("remove-label-icon")}
                    className={classes.svgSmallClose}
                    key="2"
                  />
                </IconButton>,
              ]}
            />
          </div>
        </Snackbar>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export { WarningSnackbar };
