import React from "react";
import { addDecorator } from "@storybook/react";
import GlobalStyle from "../src/components/Global-style";

addDecorator((storyFn) => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
));
