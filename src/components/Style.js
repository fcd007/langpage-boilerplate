import styled, { css } from "styled-components";

export const Root = styled.div`
  color: #fff;

  ${(props) => css`
    background: url(${props.image}), rgba(0, 0, 0, 0.4);
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
  `}
`;

export const Title = styled.h1`
  font-weight: 700;
  letter-spacing: 2px;
`;

export const Content = styled.div`
  p,
  li {
    font-size: 20px;
    font-weight: 300;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li::before {
    content: "\\2713\\0020";
  }
`;
