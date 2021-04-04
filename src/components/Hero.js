import React from "react";
import PropTypes from "prop-types";

import { Root, Title, Content, Container } from "./Style";

const Hero = ({ image, title, children }) => (
  <Root image={image}>
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  </Root>
);

Hero.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Hero;
