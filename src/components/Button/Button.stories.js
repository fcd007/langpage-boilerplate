import React from "react";
import { actions } from "@storybook/addon-actions";
import Button from "./Button";
import { Toolbar } from "./styles";

export default {
  title: "Components/Button",
  component: Button,
};

const events = actions({ onClick: "clicked" });

export const usage = () => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Button {...events}>Default</Button>
      <Button color="primary" {...events}>
        Primary
      </Button>
      <Button color="error" {...events}>
        Error
      </Button>
    </Toolbar>
    <p>Desabled:</p>
    <Toolbar>
      <Button disabled {...events}>
        Default
      </Button>
      <Button disabled color="primary" {...events}>
        Primary
      </Button>
      <Button disabled color="error" {...events}>
        Error
      </Button>
    </Toolbar>
  </div>
);
