import styled from "styled-components";
import { theme } from "styles/ThemeProvider";

const { colors } = theme;

export const ButtonRoot = styled.button`
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  padding: 12px 36px;
  cursor: pointer;
  background-color: ${colors.primary.main};
  border: 2px solid ${colors.primary.main};
  color: ${colors.text.main};
`;
