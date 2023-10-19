import React, { useState } from "react";

import "react-wheel-of-prizes/dist/index.css";

import Confetti from "react-confetti";

import { styled } from "styled-components";
import useModal from "../hook/useModal";
import { phoneWeelColors } from "../lib/utils";
import { phoneSegments } from "../localstore";
import HeaderModal from "./HeaderModal";
import LuckyList from "./LuckyList";
import PhoneList from "./PhoneList";
import TrPortal from "./TrPortal";
import WheelComponent from "./wheel";

const PhoneRotation = () => {
  const modal = useModal();
  const luckyModal = useModal();
  const [show, setShow] = useState(false);
  const [phones, setPhones] = useState("");
  const [phonesOpt, setPhonesOpt] = useState();
  const [phoneColor, setPhoneColor] = useState();
  const [luckyNum, setLuckyNum] = useState([]);

  const phoneSegColors = phoneWeelColors();
  const onFinished = (winner) => {
    console.log("winner", winner);
    setShow(winner);
    modal.show();
  };
  const handleOk = () => {
    const valPhones = phonesOpt.filter((item) => item !== show);
    setPhonesOpt(valPhones);
    setPhones(valPhones?.toString());
    if (show && !luckyNum.includes(show)) {
      setLuckyNum((prev) => [...prev, show]);
    }
    setShow(false);

    modal.hide();
  };
  return (
    <>
      {show && <ScConfetti />}

      {phonesOpt && phoneColor ? (
        <WheelComponent
          key={JSON.stringify(phonesOpt)}
          segments={phonesOpt}
          segColors={phoneColor}
          onFinished={(winner) => onFinished(winner)}
          primaryColor="#3b82f6"
          contrastColor="white"
          buttonText="Finviet"
          isOnlyOnce={true}
        />
      ) : (
        <WheelComponent
          key={JSON.stringify(phoneSegments)}
          segments={phoneSegments}
          segColors={phoneSegColors}
          onFinished={(winner) => onFinished(winner)}
          primaryColor="#3b82f6"
          contrastColor="white"
          buttonText="Finviet"
          isOnlyOnce={true}
        />
      )}

      <PhoneList
        setPhones={setPhones}
        phones={phones}
        setPhonesOpt={setPhonesOpt}
        setPhoneColor={setPhoneColor}
        luckyModal={luckyModal}
      />
      {modal.visible && (
        <TrPortal open={modal.visible}>
          <Wrapper>
            <HeaderModal />
            <ScNumberCard>
              <Text>{show}</Text>
            </ScNumberCard>

            <Text>Chúc Mừng!! SĐT: {show}, Bạn Đã Trúng Thưởng !!!</Text>
            <ScButtons>
              <button className="button-primary" onClick={handleOk}>
                Xác Nhận
              </button>
            </ScButtons>
          </Wrapper>
        </TrPortal>
      )}
      {luckyModal.visible && (
        <LuckyList luckyModal={luckyModal} luckyNum={luckyNum} />
      )}
    </>
  );
};

export default PhoneRotation;

const ScNumberCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 400px;
  height: 200px;

  padding: 8px;
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
  max-width: 640px;
  max-height: 420px;

  border-radius: 8px;
  background: #fff;
`;
const ScButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 10px;
`;
