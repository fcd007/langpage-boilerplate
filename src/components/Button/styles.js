import styled from "styled-components";
import { theme } from "styles/ThemeProvider";

export const ButtonRoot = styled.button`
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  padding: 12px 36px;
  cursor: pointer;
  background-color: ${theme.colorYellow};
  border: 2px solid ${theme.colorYellow};
  color: ${theme.colorText};
`;
