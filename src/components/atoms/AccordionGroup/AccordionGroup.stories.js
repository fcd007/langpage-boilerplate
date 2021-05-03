import React from "react";

import Accordion from "../Accordion/Accordion";
import AccordionGroup from "./AccordionGroup";

export default {
  title: "Components/atoms/AccordionGroup",
  component: AccordionGroup,
};

export const usage = () => (
  <AccordionGroup>
    <Accordion title="Como funciona o projeto SmartEye?">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
      voluptatibus enim et quaerat minima blanditiis.
    </Accordion>

    <Accordion title="Como recuperar senha ou acesso bloqueado?">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
      voluptatibus enim et quaerat minima blanditiis.
    </Accordion>

    <Accordion title="Como solicito acesso a plataforma SmartEye?">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
      voluptatibus enim et quaerat minima blanditiis.
    </Accordion>
  </AccordionGroup>
);
