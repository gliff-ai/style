import { useState, SyntheticEvent, MouseEvent, ReactElement } from "react";
import ReactDOM from "react-dom";
import { BaseTextButton, HtmlTooltip, BaseSnackbar, BasePopover } from "../src";
import { imgSrc } from "./src/helpers";

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

    <h4>BasePopover</h4>
    <BasePopover
      tooltip={{
        name: "hello world",
        icon: imgSrc("image-viewer"),
      }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      children={<p>hello world</p>}
    />
  </div>
);

ReactDOM.render(app, document.getElementById("react-container"));
