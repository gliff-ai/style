import { ReactElement } from "react";
import SVG from "react-inlinesvg";
import {
  IconButton,
  makeStyles,
  Snackbar,
  SnackbarContent,
  ThemeProvider,
} from "@material-ui/core";
import { theme } from "./theme";

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
    height: "100%",
    marginLeft: "11px",
    marginRight: "0px",
    marginTop: "-3px",
    marginBottom: "0px",
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

function MessageSnackbar({ open, onClose, messageText }: Props): ReactElement {
  const classes = useStyle();
  return (
    <ThemeProvider theme={theme}>
      <Snackbar open={open} onClose={onClose}>
        <>
          <SnackbarContent
            className={classes.snackbarContent}
            message={
              <span>
                <SVG src={imgSrc("warning")} className={classes.svgSmall} />

                <div className={classes.message}>{messageText}</div>
                <IconButton
                  size="small"
                  aria-label="close"
                  onClick={onClose}
                  className={classes.iconButton}
                >
                  <SVG
                    src={imgSrc("remove-label-icon")}
                    className={classes.svgSmallClose}
                  />
                </IconButton>
              </span>
            }
          />
        </>
      </Snackbar>
    </ThemeProvider>
  );
}

export { MessageSnackbar };
