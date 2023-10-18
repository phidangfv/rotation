import React, { useState } from "react";
import IMAGES from "./assets";

import { objIndex, segments } from "./localstore";
import "react-wheel-of-prizes/dist/index.css";

import { weelColors } from "./lib/utils";
import Confetti from "react-confetti";

import { styled } from "styled-components";
import { WheelComponent, TrPortal, HeaderModal } from "./component";

const App = () => {
  const [portal, setPortal] = useState(false);
  const [show, setShow] = useState(false);
  const segColors = weelColors();
  const onFinished = (winner) => {
    console.log("winner", winner);
    setPortal(false);
    setShow(winner);
  };

  return (
    <Container
      style={{
        background: `url(${IMAGES.background})`,
      }}
    >
      {show && <SC_Confetti />}
      <WheelComponent
        segments={segments}
        segColors={segColors}
        // winningSegment={"8"}
        // winningSegment={"I phone 13 pro max"}
        onFinished={(winner) => onFinished(winner)}
        primaryColor="#3b82f6"
        contrastColor="white"
        buttonText="Finviet"
        isOnlyOnce={true}
      />
      {show && (
        <TrPortal open={!!show}>
          <HeaderModal />
          <Image
            src={IMAGES[`image${objIndex[show.split(" ").join("")]}`]}
            alt=""
          />
          <Text>Chúc Mừng!!! Bạn Nhận Được {show} !!!</Text>
          <div>
            <button className="closepankaj" onClick={() => setShow(false)}>
              Xác Nhận
            </button>
          </div>
        </TrPortal>
      )}
    </Container>
  );
};

export default App;
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 150px;
  padding-bottom: 150px;
  height: 100vh;
`;
const Image = styled.img`
  width: 300px;
  height: 450px;
  padding: 8px;
  object-fit: contain;
  border: 2px #ffcd34 solid;
  border-radius: 8px;
`;
const Text = styled.h2`
  text-align: center;
  padding: 8px;
  color: #3b82f6;
`;
const SC_Confetti = styled(Confetti)`
  width: 100%;
  height: 100%;
  z-index: 200 !important;
`;
