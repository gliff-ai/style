import { createTheme } from "@material-ui/core/styles";
import type {} from "@material-ui/lab/themeAugmentation"; // Required to add autocomplete to Theme until v5

export { ThemeProvider } from "@material-ui/core";
export const imgSrc = (src: string, type = "svg"): string =>
  // eslint-disable-next-line import/no-dynamic-require
  require(`@/assets/${src}.${type}`) as string;

export const white = "#FFF";
export const lightestGrey = "#FAFAFA";
export const lightGrey = "#F2F2F2";
export const veryLightBlue = "#DADDE9";
export const middleGrey = "#A1A1A1";
export const darkGrey = "#2B2F3A";
export const black = "#000";
export const mainGreen = "#02FFAD";
export const purple = "#AE79FF";
export const blue = "#00DBFF";

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

  overrides: {
    MuiButton: {
      root: {
        color: black,
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
    },

    MuiCssBaseline: {
      "@global": {
        html: {
          height: "100%",
        },
        body: {
          height: "100%",
        },
      },
    },

    MuiOutlinedInput: {
      root: {
        height: "50px",
      },
    },
    MuiAccordionSummary: {
      root: {
        "&$expanded": {
          minHeight: "4px",
        },
      },
    },

    MuiCardContent: {
      root: {
        "&:last-child": {
          paddingBottom: "18px",
        },
      },
    },

    MuiAutocomplete: {
      option: {
        '&[data-focus="true"]': {
          backgroundColor: mainGreen,
        },
      },
    },

    MuiContainer: {
      root: {
        marginTop: "25px",
      },
    },

    MuiFormControl: {
      root: {
        display: "flex",
      },
    },

    MuiIconButton: {
      root: {
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
    },

    MuiListItem: {
      button: {
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
    },

    MuiList: {
      root: {
        "&:hover": {
          backgroundColor: white,
        },
      },
    },

    MuiSlider: {
      root: {
        color: black,
        textAlign: "center",
      },
      vertical: {
        height: "auto",
      },
    },

    MuiPopover: {
      root: {
        marginLeft: "20px",
      },
    },

    MuiButtonGroup: {
      root: {
        border: "1px solid",
        borderColor: veryLightBlue,
        borderRadius: "9px",
        padding: "8px",
        background: lightestGrey,
        width: "63px",
      },
    },
    MuiDivider: {
      root: {
        marginTop: "-15px",
        width: "90%",
        marginLeft: "12px",
        marginBottom: "17px",
      },
    },

    MuiAvatar: {
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
      circle: {
        backgroundColor: mainGreen,
        "&:hover": {
          backgroundColor: white,
        },
      },
    },
  },

  props: {
    MuiIconButton: {
      disableRipple: true,
    },

    MuiButtonGroup: {
      orientation: "vertical",
      variant: "outlined",
      disableRipple: true,
    },

    MuiButtonBase: {
      disableRipple: true,
    },

    MuiPopover: {
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
});
