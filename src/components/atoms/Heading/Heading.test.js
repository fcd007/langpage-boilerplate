import React from "react";
import { render } from "@testing-library/react";

import Heading from "./Heading";

test("Match snapshot", () => {
  const { asFragment } = render(<Heading>Title</Heading>);

  expect(asFragment()).toMatchSnapshot();
});
