import React from "react";
import PropTypes from "prop-types";

import { StyledBody } from "./style";

const CardBody = ({ children }) => <StyledBody>{children}</StyledBody>;

CardBody.defaultProps = {};

CardBody.propTypes = {};

export default CardBody;
