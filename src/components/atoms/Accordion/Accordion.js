import React, { useState } from "react";

import { MdExpandMore, MdExpandLess } from "react-icons/md";
import PropTypes from "prop-types";
import { Root, Body, Head } from "./style";

const Accordion = ({ title, open: pOpen, onChange, children }) => {
  const [stateOpen, setStateOpen] = useState(true);

  const isControlled = pOpen !== undefined;
  const openController = isControlled ? pOpen : stateOpen;

  const handleClick = () => {
    const newState = !openController;
    if (isControlled) {
      onChange(newState);
    } else {
      setStateOpen(newState);
    }
  };

  return (
    <Root open={openController}>
      <Head role="button" onClick={handleClick}>
        <h6>{title}</h6>
        {stateOpen ? <MdExpandLess /> : <MdExpandMore />}
      </Head>
      {stateOpen && <Body>{children}</Body>}
    </Root>
  );
};

Accordion.defaultProps = {
  title: undefined,
  children: undefined,
  open: undefined,
  onChange: undefined,
};

Accordion.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  open: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Accordion;
