import styled from "styled-components";
import { theme } from "styles/ThemeProvider";

const { colors } = theme;

export const ButtonColors = {
  default: "default",
  primary: "primary",
  error: "error",
};

const getColorButton = ({ color }) => {
  switch (color) {
    case ButtonColors.primary:
      return theme.colors.primary.main;
    case ButtonColors.error:
      return theme.colors.error.main;
    default:
      return "#BDBDBD";
  }
};

export const ButtonRoot = styled.button`
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  padding: 12px 36px;
  cursor: pointer;
  background-color: ${getColorButton};
  border: 2px solid ${getColorButton};
  color: ${colors.text.light};
`;

export const Toolbar = styled.div`
  & > * {
    margin-right: 8px;
  }
`;
