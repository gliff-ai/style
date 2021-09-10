import { ButtonGroup } from "@material-ui/core";
import { useState, SyntheticEvent, MouseEvent, ReactElement } from "react";
import ReactDOM from "react-dom";

import { BaseTextButton, HtmlTooltip, BaseSnackbar, IconButton } from "../src";

export const imgSrc = (src: string, type = "svg"): string =>
  new URL(`/src/assets/${src}.${type}`, import.meta.url).href;

const SnackBar = (): ReactElement => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event: SyntheticEvent | MouseEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <BaseTextButton text="Open" onClick={handleClick} />
      <BaseSnackbar
        message={<>Snackbar</>}
        handleClose={handleClose}
        open={open}
      />
    </>
  );
};

const app = (
  <div>
    <h4>BaseTextButton</h4>
    <BaseTextButton text="Hello World" />

    <h4>HtmlTooltip</h4>
    <HtmlTooltip key="Key" title={<>Title</>} placement="right">
      <img src="https://via.placeholder.com/50x50/aaffff" alt="Icon" />
    </HtmlTooltip>

    <h4>SnackBar</h4>
    <SnackBar />

    <h4>Icon Button</h4>

    <div>
      <ButtonGroup>
        <IconButton tooltip={{ name: "Small Button" }} icon={imgSrc("icon")} />
        <IconButton
          tooltip={{ name: "Medium Button" }}
          icon={imgSrc("icon")}
          size="medium"
        />
        <IconButton
          tooltip={{
            name: "Medium Button",
            shortcut: "K",
            shortcutSymbol: "cmd",
          }}
          icon={imgSrc("icon")}
          size="medium"
        />
      </ButtonGroup>
    </div>
  </div>
);

ReactDOM.render(app, document.getElementById("react-container"));
