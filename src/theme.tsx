import { createTheme } from "@mui/material/styles/";
import createBreakpoints from "@mui/system/createTheme/createBreakpoints";

import type {} from "@mui/lab/themeAugmentation"; // Required to add autocomplete to Theme until v5

export const white = "#FFFFFF";
export const lightestGrey = "#FAFAFA";
export const lightGrey = "#F2F2F2";
export const veryLightBlue = "#DADDE9";
export const middleGrey = "#A1A1A1";
export const darkGrey = "#2B2F3A";
export const black = "#000000";
export const mainGreen = "#02FFAD";
export const purple = "#AE79FF";
export const blue = "#00DBFF";

const breakpoints = createBreakpoints({});

export const theme = createTheme({
  palette: {
    primary: {
      main: mainGreen,
      light: white,
    },
    secondary: {
      main: purple,
      light: lightestGrey,
    },
    text: {
      primary: darkGrey,
      secondary: middleGrey,
    },
    info: {
      main: blue,
      light: purple,
    },
  },
  typography: {
    fontFamily: "Roboto",
  },

  shape: {
    borderRadius: 6,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            borderColor: "transparent",
          },
          "&$disabled": {
            "&$outlined": {
              border: "none",
            },
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "@global": {
          html: {
            height: "100%",
          },
          body: {
            height: "100%",
            backgroundColor: lightGrey,
          },
          "#react-container": {
            overflow: "hidden",
            height: "100%",
          },
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: white,
          borderRadius: "6px",
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: "50px",
        },
      },
    },

    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          "&$expanded": {
            minHeight: "4px",
          },
        },
      },
    },

    MuiCardContent: {
      styleOverrides: {
        root: {
          "&:last-child": {
            paddingBottom: "18px",
          },
        },
      },
    },

    MuiAutocomplete: {
      styleOverrides: {
        option: {
          '&[data-focus="true"]': {
            backgroundColor: mainGreen,
          },
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: mainGreen,
          },
        },
      },
    },

    MuiContainer: {
      styleOverrides: {
        root: {
          marginTop: "25px",
        },
      },
    },

    MuiFormControl: {
      styleOverrides: {
        root: {
          display: "flex",
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },

    MuiListItem: {
      styleOverrides: {
        button: {
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },

    MuiList: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: white,
          },
        },
      },
    },

    MuiSlider: {
      styleOverrides: {
        root: {
          color: black,
          textAlign: "center",
        },
        vertical: {
          height: "auto",
        },
        mark: {
          backgroundColor: "transparent",
        },
        markActive: {
          backgroundColor: "transparent",
        },
      },
    },

    MuiPopover: {
      styleOverrides: {
        root: {
          marginLeft: "20px",
        },
      },
      defaultProps: {
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "left",
        },
      },
    },

    MuiButtonGroup: {
      styleOverrides: {
        root: {
          border: "1px solid",
          borderColor: veryLightBlue,
          borderRadius: "9px",
          paddingTop: "8px",
          paddingBottom: "8px",
          background: lightestGrey,
        },
        groupedVertical: {
          paddingLeft: "8px",
          paddingRight: "8px",
          [breakpoints.down("md")]: {
            paddingLeft: "0px",
            paddingRight: "0px",
          },
        },
        groupedOutlined: {
          border: "transparent",
        },
        groupedHorizontal: {
          paddingTop: "0px",
          paddingBottom: "0px",
        },
      },
      defaultProps: {
        orientation: "vertical",
        variant: "outlined",
        disableRipple: true,
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          marginTop: "-15px",
          width: "90%",
          marginLeft: "12px",
          marginBottom: "17px",
        },
      },
    },

    MuiAvatar: {
      styleOverrides: {
        rounded: {
          "&:hover": {
            backgroundColor: "transparent",
          },
          display: "contents",
        },
        circular: {
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: mainGreen,
          },
        },
        // circular: {
        //   backgroundColor: mainGreen,
        //   "&:hover": {
        //     backgroundColor: white,
        //   },
        // },
        colorDefault: {
          backgroundColor: white,
          "&:hover": {
            backgroundColor: mainGreen,
          },
          "&:hover svg": {
            fill: black,
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
