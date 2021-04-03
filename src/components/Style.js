import styled, { css } from "styled-components";

export const BreadkpointsSize = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const breakAt = (size) => `@media (min-width: ${size}px)`;

export const Root = styled.div`
  color: #fff;
  padding: 100px 0;

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

export const Container = styled.div`
  width: 100%;
  padding: 0 16px;

  ${breakAt(BreadkpointsSize.sm)} {
    padding: 0 48px;
  }

  ${breakAt(BreadkpointsSize.xl)} {
    padding: 0;
    width: 1140px;
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  p,
  li {
    font-size: 20px;
    font-weight: 300;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    &::before {
      content: "\\2713\\0020";
    }
  }
`;
