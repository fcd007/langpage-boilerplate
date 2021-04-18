import React, { Component } from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Hero from "./Hero";

test("should Hero with children", () => {
  const component = render(
    <Hero>
      <p>Claudeilton Dantas</p>
    </Hero>
  );

  component.debug(); //exibindo o DOM

  expect(component.getByText("Claudeilton Dantas")).toBeInTheDocument();
});
