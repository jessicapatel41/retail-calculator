//add theme here for resuability across the app
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,

  // TO DO: Add custom colors, fonts, and other theme properties here
});

export default theme;
