import React, { useState } from "react";

import { MdExpandMore, MdExpandLess } from "react-icons/md";
import PropTypes from "prop-types";
import { Root, Body, Head } from "./style";

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  const handleAccordion = () => {
    setOpen(!open);
  };

  return (
    <Root>
      <Head role="button" onClick={handleAccordion}>
        <h6>{title}</h6>
        {open ? <MdExpandLess /> : <MdExpandMore />}
      </Head>
      {open && <Body>{children}</Body>}
    </Root>
  );
};

Accordion.defaultProps = {
  title: undefined,
  children: undefined,
};

Accordion.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Accordion;
