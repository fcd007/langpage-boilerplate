import React from "react";
import PropTypes from "prop-types";

import ContainerRoot from "components/atoms/ContainerRoot/ContainerRoot";
import { Content } from "./style";

const Section = ({ children }) => (
  <ContainerRoot>
    <Content>{children}</Content>
  </ContainerRoot>
);

Section.defaultProps = {
  children: undefined,
};

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
