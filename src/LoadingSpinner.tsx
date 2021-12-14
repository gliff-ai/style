import { ReactElement } from "react";
import { CircularProgress, Box, BoxProps } from "@mui/material";

const LoadingSpinner = (props: BoxProps): ReactElement => (
  <Box
    component="div"
    style={{
      margin: "auto",
      width: "100px",
      height: "100px",
    }}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    <CircularProgress size="100px" color="primary" />
  </Box>
);

export { LoadingSpinner };
