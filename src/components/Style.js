import styled, { css } from "styled-components";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
</style>;

export const Root = styled.div`
  ${(props) => css`
    background: url(${props.image}), rgba(0, 0, 0, 0.4);
    background-size: cover;
    background-position: center;
  `}
`;

export const Title = styled.h1`
  font-family: "Roboto", "sans-serif";
  font
`;

export const Content = styled.div`
  p,
  li {
    font-family: "Roboto", "sans-serif";
    font-weight: 300;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li::before {
    content: "\\2713\\0020";
  }
`;
