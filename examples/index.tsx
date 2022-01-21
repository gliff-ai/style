import {
  ButtonGroup,
  ThemeProvider,
  Theme,
  StyledEngineProvider,
  CssBaseline,
} from "@mui/material";
import StylesProvider from "@mui/styles/StylesProvider";
import { useState, SyntheticEvent, MouseEvent, ReactElement } from "react";
import ReactDOM from "react-dom";
import SVG from "react-inlinesvg";

import {
  BaseTextButton,
  HtmlTooltip,
  BaseTooltipTitle,
  BasePopover,
  IconButton,
  Logo,
  LoadingSpinner,
  theme,
  icons,
  WarningSnackbar,
} from "../src";

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

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
      <WarningSnackbar
        messageText={<>Snackbar</>}
        onClose={handleClose}
        open={open}
      />
    </>
  );
};

const app = (
  <StylesProvider>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ margin: "50px" }}>
          <h2>Logo</h2>

          <Logo />

          <h2>BaseTextButton</h2>
          <BaseTextButton text="Hello World" />
          <br></br>
          <br></br>
          <BaseTextButton text="Hello World" disabled={true} />

          <h2>SnackBar</h2>
          <SnackBar />

          <h2>HtmlTooltip / BaseTooltipTitle</h2>
          <br></br>
          <br></br>
          <br></br>
          <HtmlTooltip
            placement={"top-start"}
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
            placement={"top-start"}
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
            placement={"top-start"}
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
          <h2>Icon Button</h2>
          <div>
            <ButtonGroup orientation="vertical" variant="text">
              <IconButton
                data-testid="small-button"
                id="small-button"
                tooltip={{ name: "Small Button" }}
                icon={imgSrc("icon")}
                size="small"
              />
              <IconButton
                tooltip={{ name: "Small Active Button" }}
                icon={imgSrc("icon")}
                fill={true}
                size="small"
              />
              <IconButton
                tooltip={{ name: "Small Disabled Button" }}
                icon={imgSrc("icon")}
                disabled={true}
                size="small"
              />
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
            <br />
            <br />
            <ButtonGroup orientation="horizontal" variant="text">
              <IconButton
                tooltip={{ name: "Small Button" }}
                icon={imgSrc("icon")}
                size="small"
              />
              <IconButton
                tooltip={{ name: "Small Active Button" }}
                icon={imgSrc("icon")}
                fill={true}
                size="small"
              />
              <IconButton
                tooltip={{ name: "Small Disabled Button" }}
                icon={imgSrc("icon")}
                disabled={true}
                size="small"
              />
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
            <br />
            <br />
            <ButtonGroup variant="text">
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

          <h2>BasePopover</h2>
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

          <section style={{ float: "left" }}>
            {Object.entries(icons).map(([name, src]) => (
              <span style={{ float: "left", padding: "20px" }} key={name}>
                <p>{name}</p>
                <SVG src={src} width="50px" height="50px" className="icon" />
              </span>
            ))}
          </section>

          <h2>Loading Spinner</h2>
          <div>
            <hr />
            <LoadingSpinner />
            <hr />
          </div>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  </StylesProvider>
);

ReactDOM.render(app, document.getElementById("react-scroll-container"));
