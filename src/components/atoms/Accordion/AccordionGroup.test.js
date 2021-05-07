import React from "react";
import { render, screen } from "test-utils";
import Accordion from "./Accordion";
import AccordionGroup from "./AccordionGroup";

test("Renders with one child", () => {
  const title = "My title";
  render(
    <AccordionGroup>
      <Accordion title={title} />
    </AccordionGroup>
  );

  expect(screen.getByText(title)).toBeInTheDocument();
});

test("Renders with 3 child", () => {
  const title = "My title";
  render(
    <AccordionGroup>
      <Accordion title={title} />
      <Accordion title={title} />
      <Accordion title={title} />
    </AccordionGroup>
  );

  expect(screen.getAllByText(title)).toHaveLength(3);
});
