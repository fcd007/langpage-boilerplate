import React from "react";
//adicionando os estilos para poder gerenciar os styles
import Hero from "../components/Hero.js";
import headerCovidImage from "../assets/images/covid-isolation.jpg";
import headerWomanImage from "../assets/images/mask-woman.jpg";

export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero title="Ganhe sua liberdade hoje mesmo!" image={headerCovidImage}>
    <p>A melhor opção em soluções e tecnologia!</p>
  </Hero>
);

export const ListContent = () => (
  <Hero title="Ganhe sua liberdade hoje mesmo!" image={headerWomanImage}>
    <ul>
      <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
      <li> Suscipit sed officia quae aut, rerum tempore adipisci.</li>
      <li> eaque voluptates quas, officiis aspernatur veniam ut.</li>
      <li>dolores molestias! Maxime deleniti iste similique molestiae!</li>
    </ul>
  </Hero>
);
