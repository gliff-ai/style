import { ReactElement } from "react";
import { CircularProgress, Box, BoxProps, ThemeProvider } from "@mui/material";
import { theme } from "../../theme";

const LoadingSpinner = (props: BoxProps): ReactElement => (
  <ThemeProvider theme={theme}>
    <Box
      component="div"
      sx={{
        margin: "auto",
        width: "100px",
        height: "100px",
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <CircularProgress size="100px" color="primary" />
    </Box>
  </ThemeProvider>
);

export { LoadingSpinner };
