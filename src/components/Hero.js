import React from "react";
import { Title, Content } from "./Style";

const Hero = ({ title, children }) => (
  <div>
    <div>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </div>
    <button type="submit">Matricule-se Já</button>
  </div>
);

export default Hero;
