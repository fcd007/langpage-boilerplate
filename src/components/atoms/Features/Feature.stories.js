import React from "react";
import { FaLaptop } from "react-icons/fa";
import Feature from "./Feature";

export default {
  title: "Components/Atoms/Feature",
  component: "Feature",
};

export const usage = () => (
  <Feature icon={<FaLaptop />} title="Teste">
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
  </Feature>
);
