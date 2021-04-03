import React from "react";
//adicionando os estilos para poder gerenciar os styles
import Hero from "../components/Hero";
import headerCovidImage from "../assets/images/covid-isolation.jpg";
import headerWomanImage from "../assets/images/mask-woman.jpg";

export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero
    title="Plataforma de Gestão de UBS e Áreas Hospitalares"
    image={headerCovidImage}
  >
    <p>O Smartye provê gestão em tempo real no ambiente de UBSs e Hospitais</p>
  </Hero>
);

export const ListContent = () => (
  <Hero
    title="Plataforma de Gestão de UBS e Áreas Hospitalares"
    image={headerWomanImage}
  >
    <ul>
      <li>Controle de aglomerações em ambientes da unidade de saúde;</li>
      <li>Monitoramento em tempo real distanciamento e fluxo de pessoas;</li>
      <li>Sistema de gestão ativos e controle de recursos;</li>
    </ul>
  </Hero>
);
