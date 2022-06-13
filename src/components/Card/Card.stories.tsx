import { Typography } from "@mui/material";
import { Card } from "./Card";

export default {
  title: "Card",
  component: Card,
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Primary = () => (
  <Card title="Example Card">
    <Typography>This is a basic card.</Typography>
  </Card>
);
export const Secondary = () => (
  <Card title="Example Card" closeButton>
    <Typography>This is a basic card.</Typography>
  </Card>
);
export const Warning = () => (
  <Card title="Example Card" warningDialog>
    <Typography>This is a basic card.</Typography>
  </Card>
);
