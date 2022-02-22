import { ReactElement, SyntheticEvent } from "react";
import SVG from "react-inlinesvg";

import {
  CircularProgress,
  Typography,
  Box,
  Snackbar,
  SnackbarContent,
  ThemeProvider,
  StyledEngineProvider,
  Theme,
} from "@mui/material";
// import makeStyles from "@mui/styles/makeStyles";
import { theme } from "./theme";

export const imgSrc = (src: string, type = "svg"): string =>
  new URL(`/src/assets/icons/${src}.${type}`, import.meta.url).href;

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

type Task = { isLoading: boolean; description: string; progress?: number };

interface Props {
  task: Task;
  setTask: (task: Task) => void;
}

function ProgressSnackbar({ task, setTask }: Props): ReactElement {
  const handleClose = (event: SyntheticEvent | MouseEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setTask({ isLoading: false, description: "" } as Task);
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Snackbar
          open={task.isLoading}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <SnackbarContent
            message={
              <div style={{ display: "contents" }}>
                <Box
                  style={{
                    position: "relative",
                    display: "inline-flex",
                    marginRight: "10px",
                  }}
                >
                  {task.progress === 100 ? (
                    <SVG
                      src={imgSrc("tick")}
                      style={{
                        width: "22px",
                        height: "100%",
                        fill: theme.palette.primary.light,
                        marginRight: "10px",
                      }}
                    />
                  ) : (
                    <CircularProgress
                      variant={
                        task.progress !== undefined
                          ? "determinate"
                          : "indeterminate"
                      }
                      value={task.progress}
                      size="3rem"
                      color="secondary"
                    />
                  )}

                  {task.progress !== undefined && task.progress !== 100 && (
                    <Box
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography component="div">{`${task.progress}%`}</Typography>
                    </Box>
                  )}
                </Box>

                <Typography>{`${task.description}`}</Typography>
              </div>
            }
          />
        </Snackbar>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export { ProgressSnackbar, Task };
