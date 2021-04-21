import React from "react";
import propTypes from "prop-types";
import { ButtonRoot } from "./styles";

const ButtonColors = {
  default: "default",
  primary: "primary",
  error: "error",
};

const Button = ({ type, children, color, disabled, onClick }) => (
  <ButtonRoot disabled={disabled} type={type} color={color} onClick={onClick}>
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
