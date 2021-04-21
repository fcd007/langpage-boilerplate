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

export const outlined = () => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Button {...events} outlined="outlined">
        Default
      </Button>
      <Button color="primary" {...events} outlined="outlined">
        Primary
      </Button>
      <Button color="error" {...events} outlined="outlined">
        Error
      </Button>
    </Toolbar>
    <p>Desabled:</p>
    <Toolbar>
      <Button disabled {...events} outlined="outlined">
        Default
      </Button>
      <Button disabled color="primary" {...events} outlined="outlined">
        Primary
      </Button>
      <Button disabled color="error" {...events} outlined="outlined">
        Error
      </Button>
    </Toolbar>
  </div>
);
