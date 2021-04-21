import styled from "styled-components";
import { theme } from "styles/ThemeProvider";

const ButtonColors = {
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
      return theme.colors.text.secundary;
  }
};

const getColorDark = ({ color }) => {
  switch (color) {
    case ButtonColors.primary:
      return theme.colors.primary.dark;
    case ButtonColors.error:
      return theme.colors.error.dark;
    default:
      return theme.colors.text.primary;
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
  border-radius: 4px;
  color: ${theme.colors.text.light};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: ${getColorDark};
  }
`;

export const Toolbar = styled.div`
  & > * {
    margin-right: 8px;
  }
`;
