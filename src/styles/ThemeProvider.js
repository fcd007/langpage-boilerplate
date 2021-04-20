import React from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

export const theme = {
  colorPrymary: "#2D9CDB",
  colorSecundary: "#56CCF2",
  colorDark: "#225CAA",
  colorLight: "#F2F2F2",
  colorBackground: "#E0E0E0",
  colorText: "#4F4F4F",
  colorPlaceroud: "#BDBDBD",
  colorAlert: "#EB5757",
  colorSucess: "#27AE60",
  colorYellow: "#F2C94C",
};

const ThemeProvider = ({ children }) => (
  <StyledProvider theme={theme}>{children}</StyledProvider>
);

export default ThemeProvider;
