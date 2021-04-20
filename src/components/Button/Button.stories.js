import React from "react";
import Button from "./Button";
import { Toolbar } from "./styles";

export default {
  title: "Components/Button",
  component: Button,
};

export const usage = () => (
  <div>
    <Toolbar>
      <Button color="default">Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="error">Error</Button>
    </Toolbar>
  </div>
);
