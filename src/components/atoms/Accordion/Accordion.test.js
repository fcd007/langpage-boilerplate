import React from "react";
import { render, screen, fireEvent } from "test-utils";

import Accordion from "./Accordion";

const text = "My text sample";
const title = "My Title";

test("Should with children ", () => {
  render(<Accordion title={title}></Accordion>);
  expect(screen.getByText(title)).toBeInTheDocument();
});

test("Should without children ", () => {
  render(<Accordion>{text}</Accordion>);
  expect(screen.queryByText(text)).not.toBeInTheDocument();
});

test("Triggers onChange when it is clicked", async () => {
  const handleChange = jest.fn();
  render(<Accordion title={title} onChange={handleChange}></Accordion>);
  await fireEvent.click(screen.getByText(title));
  expect(handleChange).toBeCalledTimes(1);
});

describe("When is controlled", () => {
  describe("When starts openend", () => {
    test("Renders with children", () => {
      render(<Accordion open>{text}</Accordion>);
      expect(screen.queryByText(text)).toBeInTheDocument();
    });

    test("Hide children on click", () => {
      const { rerender } = render(
        <Accordion title={title} open>
          {text}
        </Accordion>
      );
      rerender(
        <Accordion title={title} open={false}>
          {text}
        </Accordion>
      );
      expect(screen.queryByText(text)).not.toBeInTheDocument();
    });
  });

  describe("When starts closed", () => {
    test("Renders without children", () => {
      render(<Accordion open={false}>{text}</Accordion>);
      expect(screen.queryByText(text)).not.toBeInTheDocument();
    });
  });
});
