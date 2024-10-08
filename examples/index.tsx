import {
  ButtonGroup,
  ThemeProvider,
  StyledEngineProvider,
  CssBaseline,
  Typography,
} from "@mui/material";
import StylesProvider from "@mui/styles/StylesProvider";
import {
  useState,
  SyntheticEvent,
  MouseEvent,
  ReactElement,
  useCallback,
} from "react";
import ReactDOM from "react-dom";
import SVG from "react-inlinesvg";

import {
  Button,
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
  Dialogue,
  Card,
  Box,
  DataGrid,
  AdvancedDialog,
  Notepad,
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
      <Button text="Open" onClick={handleClick} />
      <WarningSnackbar
        messageText={<>Snackbar</>}
        onClose={handleClose}
        open={open}
      />
    </>
  );
};

const AdvancedDialogExample = (): ReactElement => {
  const [open, setOpen] = useState(false);

  const onClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);
  return (
    <>
      <IconButton
        data-testid="small-button"
        id="small-button"
        tooltip={{ name: "Advanced Dialogue" }}
        icon={imgSrc("icon")}
        size="medium"
        onClick={() => {
          setOpen(true);
        }}
      />

      <AdvancedDialog
        title="Advanced Dialogue"
        open={open}
        warningDialog
        onClose={onClose}
        children={
          <Typography>
            I am an Advanced Dialogue. My state is controlled from the parent
            component
          </Typography>
        }
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
      <Button text="Open Popper" onClick={handleClick} />

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

const columns = [
  { field: "id", headerName: "ID", width: 90, editable: false },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: false,
    hideable: false, // Used to make column unhideable even when you select hide all columns. Meaning you can reshow the all the columns when you click the three dots.
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: false,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: false,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 7, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 8, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 9, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 10, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 11, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 12, lastName: "Stark", firstName: "Arya", age: 16 },
];

const NotepadWrapper = (): ReactElement => {
  const [notepadText, setNotepadText] = useState<string>("");
  return (
    <Notepad
      value={notepadText}
      onChange={(e) => {
        setNotepadText(e.target.value);
      }}
      rows={5}
      placeholder="Helper text"
    />
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
          <h2>Button</h2>
          <Button text="Hello World" />
          <br></br>
          <br></br>
          <DataGrid
            title="Example Datagrid"
            columns={columns}
            rows={rows}
            sx={{ height: "400px" }}
          />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Button text="Hello World" disabled={true} />
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
          <HtmlTooltip
            placement={"top-start"}
            open={true}
            title={
              <BaseTooltipTitle
                tooltip={{
                  name: "Tooltip With Big Status",
                  icon: icons.betaStatus,
                }}
              />
            }
          >
            <p></p>
          </HtmlTooltip>
          <br></br>
          <Box sx={{ width: "300px" }}>
            <Card title={"Example Card"}>
              <Typography>This is a basic card.</Typography>
            </Card>
          </Box>
          <br></br>
          <Box sx={{ width: "300px" }}>
            <Card title={"Example Card"} closeButton={true}>
              <Typography>This is a card with a close button.</Typography>
            </Card>
          </Box>
          <br></br>
          <Box sx={{ width: "300px" }}>
            <Card title={"Example Card"} isPinned={true}>
              <Typography>This is a card with a pin button.</Typography>
            </Card>
          </Box>
          <br></br>

          <br></br>
          <Box sx={{ width: "300px" }}>
            <Card title={"Example Card"} warningDialog>
              <Typography>This is a warning card.</Typography>
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

          <h2>Popover And Dialogue</h2>

          <Dialogue
            title="Example Dialogue"
            TriggerButton={
              <IconButton
                tooltip={{
                  name: "Open Dialogue",
                }}
                icon={imgSrc("icon")}
                size="medium"
              />
            }
            children={<Typography>Hello World</Typography>}
          />

          <AdvancedDialogExample />

          <Popover
            title="Example Popover"
            anchorOrigin={{ horizontal: "right", vertical: "top" }}
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
          <h2>Notepad</h2>
          <div style={{ width: "500px" }}>
            <NotepadWrapper />
          </div>
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
