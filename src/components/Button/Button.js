import React from "react";
import propTypes from "prop-types";
import { ButtonRoot, ButtonOutlined } from "./styles";

const ButtonColors = {
  default: "default",
  primary: "primary",
  error: "error",
};

const ButtonsVariants = {
  default: "default",
  outlined: "outlined",
  link: "link",
};

const Button = ({ type, children, color, disabled, onClick, outlined }) => (
  <ButtonRoot
    disabled={disabled}
    type={type}
    color={color}
    onClick={onClick}
    outlined={outlined}
  >
    {children}
  </ButtonRoot>
);

const ButtonWrapper = (props) => {
  switch (props.outlined) {
    case ButtonsVariants.outlined:
      return <ButtonOutlined {...props} />;
    default:
      return <Button {...props} />;
  }
};

Button.defaultProps = {
  type: "button",
  children: undefined,
  color: "default",
  variant: "default",
};

Button.propTypes = {
  type: propTypes.string,
  children: propTypes.node,
  color: propTypes.oneOf(Object.values(ButtonColors)),
  variant: propTypes.oneOf(Object.values(ButtonsVariants)),
};

export default ButtonWrapper;
