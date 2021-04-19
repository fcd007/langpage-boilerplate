import React from "react";
import propTypes from "prop-types";
import { ButtonRoot } from "./styles";

const Button = ({ type, children }) => (
  <ButtonRoot type={type}>{children}</ButtonRoot>
);

Button.defaultProps = {
  type: "button",
  children: undefined,
};

Button.propTypes = {
  type: propTypes.string,
  children: propTypes.node,
};

export default Button;
