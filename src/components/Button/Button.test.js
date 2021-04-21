import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

test("Renders a text", () => {
  const { getByText } = render(<Button>Click Here</Button>);

  expect(getByText("Click Here")).toBeInTheDocument();
});
