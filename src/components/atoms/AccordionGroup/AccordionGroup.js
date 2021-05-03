import React from "react";
import PropTypes from "prop-types";

import { Root } from "./style";

const AccordionGroup = ({ children }) => <Root>{children}</Root>;

AccordionGroup.defaultProps = {
  children: undefined,
};

AccordionGroup.propTypes = {
  children: PropTypes.node,
};

export default AccordionGroup;
