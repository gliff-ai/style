import {
  ButtonGroup,
  ThemeProvider,
  StyledEngineProvider,
  CssBaseline,
  Typography,
} from "@mui/material";
import StylesProvider from "@mui/styles/StylesProvider";
import { useState, SyntheticEvent, MouseEvent, ReactElement } from "react";
import ReactDOM from "react-dom";
import SVG from "react-inlinesvg";

import {
  BaseTextButton,
  HtmlTooltip,
  BaseTooltipTitle,
  Popover,
  IconButton,
  Logo,
  LoadingSpinner,
  theme,
  icons,
  WarningSnackbar,
  Popper,
  MuiCard,
  Paper,
  Dialog,
  Card,
  Box,
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
      <WarningSnackbar
        messageText={<>Snackbar</>}
        onClose={handleClose}
        open={open}
      />
    </>
  );
};

const ExamplePopper = (): ReactElement => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [openSubmenu, setOpenSubMenu] = useState<boolean>(false);

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickAway = () => {
    setOpenSubMenu(false);
  };

  const handleOpenSubmenu = (): void => {
    setOpenSubMenu(true);
  };

  return (
    <>
      <BaseTextButton text="Open Popper" onClick={handleClick} />

      <Popper
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        placement="right-start"
        offset={[5, 10]}
        handleClickAway={handleClickAway}
        el={
          <>
            <ButtonGroup orientation="vertical" variant="text">
              <IconButton
                data-testid="small-button"
                id="small-button"
                tooltip={{ name: "Submenu" }}
                icon={imgSrc("icon")}
                size="small"
                onClick={handleOpenSubmenu}
              />
              <IconButton
                data-testid="small-button"
                id="small-button"
                tooltip={{ name: "Submenu" }}
                icon={imgSrc("icon")}
                size="small"
                onClick={handleOpenSubmenu}
              />
            </ButtonGroup>
            {openSubmenu && (
              <MuiCard
                sx={{
                  width: "285px",
                  height: "fit-content",
                  marginLeft: "18px",
                }}
              >
                <Paper
                  elevation={0}
                  variant="outlined"
                  square
                  sx={{
                    p: "10px",
                    backgroundColor: theme.palette.primary.main,
                    position: "relative",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "21px",
                      width: "240px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    An Example Submenu
                  </Typography>
                </Paper>

                <Paper elevation={0} sx={{ p: "20px" }}>
                  Hello
                </Paper>
              </MuiCard>
            )}
          </>
        }
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

          <Box sx={{ width: "300px" }}>
            <Card title={"Example Card"}>
              <Typography>This is a card</Typography>
            </Card>
          </Box>
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

          <h2>Popover And Dialog</h2>

          <Dialog
            title="Example Dialog"
            TriggerButton={
              <IconButton
                tooltip={{
                  name: "Open Dialog",
                }}
                icon={imgSrc("icon")}
                size="medium"
              />
            }
            children={<Typography>Hello World</Typography>}
          />

          <Popover
            title="Example Popover"
            TriggerButton={
              <IconButton
                tooltip={{
                  name: "Open Popover",
                }}
                icon={imgSrc("icon")}
                size="medium"
              />
            }
            children={<Typography>Hello World</Typography>}
          />

          <h2>Popper</h2>

          <ExamplePopper />

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
