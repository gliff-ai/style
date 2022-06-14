import { Typography, Box } from "@mui/material";
import { Card } from "./Card";

export default {
  title: "Card",
  component: Card,
};

export const Primary = () => (
  <Box sx={{ width: "300px" }}>
    <Card title="Example Card">
      <Typography>This is a basic card.</Typography>
    </Card>
  </Box>
);
export const Secondary = () => (
  <Box sx={{ width: "300px" }}>
    <Card title="Example Card" closeButton>
      <Typography>This is a basic card.</Typography>
    </Card>
  </Box>
);
export const Warning = () => (
  <Box sx={{ width: "300px" }}>
    <Card title="Example Card" warningDialog>
      <Typography>This is a basic card.</Typography>
    </Card>
  </Box>
);

export const Pinned = () => (
  <Box sx={{ width: "300px" }}>
    <Card title="Example Card" isPinned>
      <Typography>This is a basic card.</Typography>
    </Card>
  </Box>
);
