import { createTheme } from "@mui/material/styles/";
// import { adaptV4Theme, createBreakpoints } from '@mui/material/styles';

import type {} from "@mui/lab/themeAugmentation"; // Required to add autocomplete to Theme until v5
import { adaptV4Theme } from "@mui/material";

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

// const breakpoints = createBreakpoints({});

export const theme = createTheme(
  adaptV4Theme({
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
          "&$disabled": {
            "&$outlined": {
              border: "none",
            },
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
            backgroundColor: lightGrey,
          },
          "#react-container": {
            overflow: "hidden",
            height: "100%",
          },
        },
      },

      MuiInputBase: {
        root: {
          backgroundColor: white,
          borderRadius: "6px",
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

      MuiMenuItem: {
        root: {
          "&:hover": {
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
        mark: {
          backgroundColor: "transparent",
        },
        markActive: {
          backgroundColor: "transparent",
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
          paddingTop: "8px",
          paddingBottom: "8px",
          background: lightestGrey,
        },
        groupedVertical: {
          paddingLeft: "8px",
          paddingRight: "8px",
          // [breakpoints.down("md")]: {
          //   paddingLeft: "0px",
          //   paddingRight: "0px",
          // },
        },
        groupedOutlined: {
          border: "none",
        },
        groupedHorizontal: {
          paddingTop: "0px",
          paddingBottom: "0px",
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
  })
);
