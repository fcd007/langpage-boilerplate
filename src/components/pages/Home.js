import React from "react";
// import PropTypes from "prop-types";
import { FaLaptop, FaKey, FaParking, FaUser } from "react-icons/fa";

import Button from "components/atoms/Button/Button";
import Heading from "components/atoms/Heading/Heading";
import { GridRoot } from "components/atoms/Grid/style";
import Feature from "components/atoms/Features/Feature";
import Hero from "components/molecules/Hero/Hero";
import Section from "components/molecules/Section/Section";

import headerCovidImage from "assets/images/hero_banner02.jpg";

const Home = () => (
  <>
    <Hero image={headerCovidImage}>
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
      <Button color="primary" variant="outlined">
        Saber mais...
      </Button>
    </Hero>

    <Section>
      <GridRoot sm={2} md={4}>
        <Feature icon={<FaUser />} title="Controle espaços">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaParking />} title="Plataforma RT">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaLaptop />} title="Gestão Inteligente">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaKey />} title="Acessibilidade">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </Feature>
      </GridRoot>
    </Section>
  </>
);

// Home.defaultProps = {};
// Home.propTypes = {};

export default Home;
