import React from "react";
//adicionando os estilos para poder gerenciar os styles
import Hero from "./Hero";
import headerCovidImage from "../../stories/assets//images/covid-isolation.jpg";
import headerWomanImage from "../../stories/assets/images/mask-woman.jpg";
import Heading from "../Heading/Heading";

export default {
  title: "Components/Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={headerCovidImage}>
    <h1>Plataforma de Gestão de UBS e Áreas Hospitalares</h1>
    <p>O Smartye provê gestão em tempo real no ambiente de UBSs e Hospitais</p>
  </Hero>
);

export const ListContent = () => (
  <Hero image={headerWomanImage}>
    <Heading>
      <h1>
        Plataforma de <strong>Gestão Inteligente</strong> <br />
        de Áreas Hospitalares
      </h1>
    </Heading>
    <ul>
      <li>Controle de aglomerações em ambientes da unidade de saúde;</li>
      <li>Monitoramento em tempo real distanciamento e fluxo de pessoas;</li>
      <li>Sistema de gestão ativos e controle de recursos;</li>
    </ul>
  </Hero>
);
