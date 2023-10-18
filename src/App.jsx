import React from "react";
import IMAGES from "./assets";

import "react-wheel-of-prizes/dist/index.css";

import { styled } from "styled-components";
import { GiftRotation, PhoneList } from "./component";

const App = () => {
  return (
    <Container
      style={{
        background: `url(${IMAGES.background})`,
      }}
    >
      {/* <PhoneRotation /> */}
      <GiftRotation />
      <PhoneList />
    </Container>
  );
};

export default App;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
  padding-bottom: 150px;
  height: 100vh;
`;
