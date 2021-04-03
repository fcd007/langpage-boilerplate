import React from "react";

const Hero = ({ title, children }) => (
  <div>
    <div>
      <h1>{title}</h1>
      {children}
    </div>
    <button type="submit">Matricule-se Já</button>
  </div>
);

export default Hero;
