import { ButtonGroup } from "@mui/material";
import { IconButton } from "./IconButton";
import { veryLightBlue, lightestGrey } from "../../theme";

const imgSrc = (src: string, type = "svg"): string =>
  new URL(`/src/assets/${src}.${type}`, import.meta.url).href;

const style = {
  border: "1px solid",
  borderColor: veryLightBlue,
  borderRadius: "9px",
  paddingTop: "8px",
  paddingBottom: "8px",
  background: lightestGrey,
};

export default {
  title: "IconButton",
  component: IconButton,
};

export const Primary = () => (
  <ButtonGroup sx={{ ...style }} orientation="vertical" variant="text">
    <IconButton
      tooltip={{ name: "Small Button" }}
      icon={imgSrc("icon")}
      size="small"
    />
  </ButtonGroup>
);

export const Secondary = () => (
  <ButtonGroup sx={{ ...style }} orientation="vertical" variant="text">
    <IconButton
      tooltip={{
        name: "Small Button",
        shortcut: "K",
        shortcutSymbol: "cmd",
      }}
      icon={imgSrc("icon")}
      size="small"
    />
  </ButtonGroup>
);

export const ActiveButton = () => (
  <ButtonGroup sx={{ ...style }} orientation="vertical" variant="text">
    <IconButton
      tooltip={{ name: "Small Active Button" }}
      icon={imgSrc("icon")}
      fill
      size="small"
    />
  </ButtonGroup>
);
export const DisabledButton = () => (
  <ButtonGroup sx={{ ...style }} orientation="vertical" variant="text">
    <IconButton
      tooltip={{ name: "Small Disabled Button" }}
      icon={imgSrc("icon")}
      disabled
      size="small"
    />
  </ButtonGroup>
);
