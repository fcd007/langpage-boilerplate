import React from "react";
import propTypes from "prop-types";
import {
  ButtonRoot,
  ButtonOutlined,
  ButtonLink,
  ButtonColors,
  ButtonsVariants,
} from "./styles";

const Button = ({ type, children, color, disabled, onClick, variant }) => (
  <ButtonRoot
    disabled={disabled}
    type={type}
    color={color}
    onClick={onClick}
    variant={variant}
  >
    {children}
  </ButtonRoot>
);

const ButtonWrapper = (props) => {
  switch (props.variant) {
    case ButtonsVariants.outlined:
      return <ButtonOutlined {...props} />;
    case ButtonsVariants.link:
      return <ButtonLink {...props} />;
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
