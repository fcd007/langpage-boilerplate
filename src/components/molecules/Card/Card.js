import React from "react";
import PropTypes from "prop-types";

import { Root } from "./style";

const Card = ({ children }) => <Root>{children}</Root>;

Card.defaultProps = {};

Card.propTypes = {};

export default Card;
