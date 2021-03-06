import { ReactElement, SyntheticEvent, useEffect, useState } from "react";
import SVG from "react-inlinesvg";

import {
  CircularProgress,
  Typography,
  Box,
  Snackbar,
  SnackbarContent,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material";
// import makeStyles from "@mui/styles/makeStyles";
import { theme } from "./theme";

export const imgSrc = (src: string, type = "svg"): string =>
  new URL(`/src/assets/icons/${src}.${type}`, import.meta.url).href;

type Task = { isLoading: boolean; description: string; progress?: number };

interface Props {
  task: Task;
  setTask: (task: Task) => void;
}

function ProgressSnackbar({ task, setTask }: Props): ReactElement {
  const [complete, setComplete] = useState<boolean>(false);

  useEffect(() => {
    if (task.progress === 100)
      setTimeout(() => {
        setComplete(true);
      }, 200);
    else setComplete(false);
  }, [task]);

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
            style={{ width: "410px" }}
            message={
              <div style={{ display: "contents" }}>
                <Box
                  style={{
                    position: "relative",
                    display: "inline-flex",
                    marginRight: "10px",
                  }}
                >
                  {complete ? (
                    <SVG
                      src={imgSrc("complete")}
                      style={{
                        width: "48px",
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
