import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Segment, TransitionablePortal } from "semantic-ui-react";
import { styled } from "styled-components";

const TrPortal = ({ children, open }) => {
  const styleSeg = {
    width: "100%",
    height: "100%",

    backgroundColor: "transparent",
    border: "none",
    position: "fixed",
    top: 0,
    zIndex: 100,
  };
  return (
    <TransitionablePortal
      closeOnTriggerClick
      // onOpen={handleOpen}
      // onClose={handleClose}
      openOnTriggerClick
      open={open}
    >
      <Segment style={styleSeg}>
        <Container2>{children}</Container2>
      </Segment>
    </TransitionablePortal>
  );
};

export default TrPortal;
const Container2 = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
`;
