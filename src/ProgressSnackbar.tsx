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
          autoHideDuration={5000}
          //   resumeHideDuration={20000}
        >
          <SnackbarContent
            message={
              task.progress === 100 ? (
                <div>{console.log("hello")} Helloo</div>
              ) : (
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
                        src={imgSrc("warning")}
                        // className={classes.svgSmall}
                      />
                    ) : (
                      <CircularProgress
                        variant="determinate"
                        value={task.progress}
                        size={task.progress === undefined ? "2rem" : "3rem"}
                      />
                    )}

                    {task.progress !== undefined && (
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
                  {task.progress === 100 ? (
                    <Typography component="div">
                      Saving annotation complete!
                    </Typography>
                  ) : (
                    <Typography>
                      Saving annotation in progress, please wait
                    </Typography>
                  )}
                </div>
              )
            }
          />
        </Snackbar>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export { ProgressSnackbar, Task };
