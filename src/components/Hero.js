import React from "react";
import { Root, Title, Content } from "./Style";

const Hero = ({ image, title, children }) => (
  <Root image={image}>
    <div>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </div>
  </Root>
);

export default Hero;
