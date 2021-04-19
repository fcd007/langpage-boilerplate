import React from "react";
import { render } from "@testing-library/react";

import GlobalStyle from "./GlobalStyle";

test("Match snapshot", () => {
  render(<GlobalStyle />);

  expect(document.head).toMatchSnapshot();
});
