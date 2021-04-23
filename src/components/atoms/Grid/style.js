import styled from "styled-components";
import { breakAt, BreadkpointsSize } from "styles/Breadkpoints";

const getPrimaryDark = ({ theme }) => theme.colors.primary.dark;

export const GridRoot = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: 1fr;

  ${breakAt(BreadkpointsSize.sm)} {
    grid-template-columns: repeat(${(props) => props.sm}, 1fr);
  }

  ${breakAt(BreadkpointsSize.md)} {
    grid-template-columns: repeat(${(props) => props.md}, 1fr);
  }

  ${breakAt(BreadkpointsSize.lg)} {
    grid-template-columns: repeat(${(props) => props.lg}, 1fr);
  }

  ${breakAt(BreadkpointsSize.xl)} {
    grid-template-columns: repeat(${(props) => props.lg}, 1fr);
  }
`;

export const Box = styled.div`
  height: 200px;
  background-color: ${getPrimaryDark};
`;
