import React from "react";
import propTypes from "prop-types";
import { ButtonRoot } from "./styles";

const Button = ({ type, children, color }) => (
  <ButtonRoot type={type} color={color}>
    {children}
  </ButtonRoot>
);

Button.defaultProps = {
  type: "button",
  children: undefined,
  color: "default",
};

Button.propTypes = {
  type: propTypes.string,
  children: propTypes.node,
  color: propTypes.oneOf(Object.values(ButtonColors)),
};

export default Button;
