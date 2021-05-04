import React from "react";
import PropTypes from "prop-types";

const AccordionGroup = ({ children }) => {
  return React.Children.map(children, (child) =>
    React.cloneElement(child, { open: true })
  );
};

AccordionGroup.defaultProps = {
  children: undefined,
};

AccordionGroup.propTypes = {
  children: PropTypes.node,
};

export default AccordionGroup;
