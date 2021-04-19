import styled from "styled-components";

const colors = {
  yellow: "#ffc107",
  light: "#fff",
  text: "#212121",
};

export const ButtonRoot = styled.button`
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  padding: 12px 36px;
  cursor: pointer;
  background-color: ${colors.yellow};
  border: 2px solid ${colors.yellow};
  color: ${colors.text};
`;
