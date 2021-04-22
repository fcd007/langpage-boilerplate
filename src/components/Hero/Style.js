import styled, { css } from "styled-components";
import { BreadkpointsSize, breakAt } from "styles/Breadkpoints";
import { allTheme } from "styles/ThemeProvider";

const { light } = allTheme;

export const Root = styled.div`
  color: ${light.colors.text.light};
  padding: 100px 0;

  ${(props) => css`
    background: url(${props.image}), rgba(25, 60, 90, 0.7);
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
  `}
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
      color: ${light.colors.primary.light};
    }
  }
`;
