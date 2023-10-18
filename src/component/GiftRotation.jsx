import React, { useState } from "react";

import "react-wheel-of-prizes/dist/index.css";

import Confetti from "react-confetti";

import { styled } from "styled-components";
import IMAGES from "../assets";
import useModal from "../hook/useModal";
import { weelColors } from "../lib/utils";
import { objIndex, segments } from "../localstore";
import HeaderModal from "./HeaderModal";
import TrPortal from "./TrPortal";
import WheelComponent from "./wheel";

const GiftRotation = () => {
  const modal = useModal();

  const [show, setShow] = useState(false);
  const segColors = weelColors();
  const onFinished = (winner) => {
    console.log("winner", winner);
    setShow(winner);
    modal.show();
  };
  const handleOk = () => {
    modal.hide();
    setShow(false);
  };
  return (
    <>
      {show && <ScConfetti />}
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
      {/* {show && modal.visible && ( */}
      {modal.visible && (
        <TrPortal open={modal.visible}>
          <Wrapper>
            <HeaderModal />
            <Image
              src={IMAGES[`image${objIndex[show.split(" ").join("")]}`]}
              alt=""
            />
            <Text>Chúc Mừng!! Bạn Nhận Được {show} !!!</Text>
            <ScButtons>
              <button className="button-primary" onClick={handleOk}>
                Xác Nhận
              </button>
            </ScButtons>
          </Wrapper>
        </TrPortal>
      )}
    </>
  );
};

export default GiftRotation;

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
const ScConfetti = styled(Confetti)`
  width: 100%;
  height: 100%;
  z-index: 200 !important;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;

  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 750px;

  border-radius: 8px;
  background: #fff;
`;
const ScButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 10px;
`;
