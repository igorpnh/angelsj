// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

// 3. extend the theme
const theme = extendTheme({
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    xxl: "1.5rem",
    exl: "1.875rem",
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode("pink.50", "purple.800")(props),
        color: mode("black", "white")(props),
      },
    }),
  },
});

export default theme;
