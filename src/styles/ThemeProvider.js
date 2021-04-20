import React from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

export const theme = {
  colors: {
    primary: {
      main: "#2D9CDB",
      dark: "#225CAA",
      light: "#56CCF2",
    },
    text: {
      main: "#333333",
      primary: "#4F4F4F",
      secundary: "#BDBDBD",
      light: "#F4F4F4",
    },
    background: {
      default: "#F2F2F2",
      paper: "#E0E0E0",
    },
    error: {
      main: "#EB5757",
      dark: "#b22a00",
    },
    status: {
      main: "#27AE60",
      attention: "#F2C94C",
    },
  },
};

const ThemeProvider = ({ children }) => (
  <StyledProvider theme={theme}>{children}</StyledProvider>
);

export default ThemeProvider;
