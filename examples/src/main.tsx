import ReactDOM from "react-dom";

import { BaseTextButton, HtmlTooltip, BaseSnackbar } from "@gliff-ai/style";
import { useState } from "react";

const SnackBar = (): React.ReactElement => {
  const [open, setOpen] = useState(false);

    const handleClick = () => {
    setOpen(true);
  };

    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
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
      <img src="http://placehold.it/25x25" alt="Icon" />
    </HtmlTooltip>

    <h4>SnackBar</h4>
    <SnackBar />

  </div>
);

ReactDOM.render(app, document.getElementById("react-container"));
