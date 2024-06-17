// importing the required chakra libraries
import { extendTheme } from "@chakra-ui/react";

// declare a variable for fonts and set our fonts. I am using Inter with various backups but you can use `Times New Roman`. Note we can set different fonts for the body and heading.
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "white",
        color: "black",
      },
    },
  },
  fonts: {
    body: "Poppins-Regular",
    heading: "Poppins-Regular",
    //   mono: 'Times New Roman, sans-serif',
  },
  colors: {
    white: "#FAFAFA",
    beige: "#FEFBF6",
    black: "#1A1A1A",
    azulacento: {
      100: "#E8E7F8",
      200: "#CAC7F0",
      300: "#A59FE5",
      400: "#7F77DA",
      500: "#5A4FCF",
      600: "#3E32B8",
      700: "#302790",
      800: "#231C68",
      900: "#130F38",
    },
    verdeacento: {
      100: "#ECFDF5",
      200: "#BCF5E3",
      300: "#90EFD0",
      400: "#63E8BE",
      500: "#37E2AB",
      600: "#1DC690",
      700: "#179C71",
      800: "#106F51",
      900: "#0A4331",
      1000: "#072C20",
    },
    gris: {
      100: "#E6E6E6",
      200: "#CCCCCC",
      300: "#B3B3B3",
      400: "#999999",
      500: "#808080",
      600: "#666666",
      700: "#4D4D4D",
      800: "#333333",
    },
    rojo: {
      100: "#E08F7E",
      200: "#E0AC9D",
      300: "#E10101",
    },
  },
});

export default theme;
