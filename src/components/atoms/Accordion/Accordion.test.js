import React from "react";
import { render, screen, fireEvent } from "test-utils";

import Accordion from "./Accordion";

test("Should test ", () => {
  const title = "My Title";
  render(<Accordion title={title}></Accordion>);
  expect(screen.getByText(title)).toBeInTheDocument();
});

test("Should without children ", () => {
  const text = "My text sample";
  render(<Accordion>{text}</Accordion>);
  expect(screen.queryByText(text)).not.toBeInTheDocument();
});

test("Triggers onChange when it is clicked", async () => {
  const title = "My title";
  const handleChange = jest.fn();

  render(<Accordion title={title} onChange={handleChange}></Accordion>);

  await fireEvent.click(screen.getByText(title));
  expect(handleChange).toBeCalledTimes(1);
});
