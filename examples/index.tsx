import {
  ButtonGroup,
  ThemeProvider,
  StylesProvider,
  CssBaseline,
} from "@material-ui/core";
import { useState, SyntheticEvent, MouseEvent, ReactElement } from "react";
import ReactDOM from "react-dom";
import SVG from "react-inlinesvg";

import {
  BaseTextButton,
  HtmlTooltip,
  BaseSnackbar,
  BaseTooltipTitle,
  BasePopover,
  IconButton,
  Logo,
  LoadingSpinner,
  theme,
  icons,
} from "../src";

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
  <StylesProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ margin: "50px" }}>
        <h4>Logo</h4>

        <Logo />

        <h4>BaseTextButton</h4>
        <BaseTextButton text="Hello World" />
        <br></br>
        <br></br>
        <BaseTextButton text="Hello World" disabled={true} />

        <h4>SnackBar</h4>
        <SnackBar />

        <h4>HtmlTooltip / BaseTooltipTitle</h4>
        <HtmlTooltip
          placement={"right"}
          open={true}
          title={
            <BaseTooltipTitle
              tooltip={{
                name: "Really Long Tooltip Text With A Shortcut",
                shortcut: "K",
                shortcutSymbol: "cmd",
              }}
            />
          }
        >
          <p></p>
        </HtmlTooltip>
        <br></br>
        <br></br>
        <br></br>
        <HtmlTooltip
          placement={"right"}
          open={true}
          title={
            <BaseTooltipTitle
              tooltip={{
                name: "Tooltip With No Shortcut",
              }}
            />
          }
        >
          <p></p>
        </HtmlTooltip>
        <br></br>
        <br></br>
        <br></br>
        <HtmlTooltip
          placement={"right"}
          open={true}
          title={
            <BaseTooltipTitle
              tooltip={{
                name: "Tooltip With Big Shortcut",
                shortcut: "space",
                shortcutSymbol: "cmd",
              }}
            />
          }
        >
          <p></p>
        </HtmlTooltip>
        <br></br>
        <br></br>
        <br></br>
        <h4>Icon Button</h4>
        <div>
          <ButtonGroup orientation="vertical">
            <IconButton
              data-testid="small-button"
              id="small-button"
              tooltip={{ name: "Small Button" }}
              icon={imgSrc("icon")}
            />
            <IconButton
              tooltip={{ name: "Small Active Button" }}
              icon={imgSrc("icon")}
              fill={true}
            />
            <IconButton
              tooltip={{ name: "Small Disabled Button" }}
              icon={imgSrc("icon")}
              disabled={true}
            />
            <IconButton
              tooltip={{
                name: "Small Button",
                shortcut: "K",
                shortcutSymbol: "cmd",
              }}
              icon={imgSrc("icon")}
            />
          </ButtonGroup>
          <br />
          <br />
          <ButtonGroup orientation="horizontal">
            <IconButton
              tooltip={{ name: "Small Button" }}
              icon={imgSrc("icon")}
            />
            <IconButton
              tooltip={{ name: "Small Active Button" }}
              icon={imgSrc("icon")}
              fill={true}
            />
            <IconButton
              tooltip={{ name: "Small Disabled Button" }}
              icon={imgSrc("icon")}
              disabled={true}
            />
            <IconButton
              tooltip={{
                name: "Small Button",
                shortcut: "K",
                shortcutSymbol: "cmd",
              }}
              icon={imgSrc("icon")}
            />
          </ButtonGroup>
          <br />
          <br />
          <ButtonGroup>
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

        <h4>BasePopover</h4>
        <BasePopover
          tooltip={{
            name: "hello world",
            icon: imgSrc("icon"),
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

        <h2>Icons</h2>

        {Object.entries(icons).map(([name, src]) => (
          <span style={{ float: "left", padding: "20px" }} key={name}>
            <p>{name}</p>
            <SVG src={src} width="50px" height="50px" className="icon" />
          </span>
        ))}

        <h4>Loading Spinner</h4>
        <div>
          <LoadingSpinner />
        </div>
      </div>
    </ThemeProvider>
  </StylesProvider>
);

ReactDOM.render(app, document.getElementById("react-scroll-container"));
