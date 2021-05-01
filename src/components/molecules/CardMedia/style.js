import styled from "styled-components";

export const StyledMedia = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: cover;
  border-radius: 4px 4px 0 0;
  width: 350px;
  height: 250px;
`;
