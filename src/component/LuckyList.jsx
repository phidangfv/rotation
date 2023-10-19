import React from "react";

import "react-wheel-of-prizes/dist/index.css";
import { styled } from "styled-components";
import HeaderModal from "./HeaderModal";
import TrPortal from "./TrPortal";

const LuckyList = ({ luckyModal, luckyNum }) => {
  return (
    <TrPortal open={luckyModal.visible}>
      <Wrapper>
        <HeaderModal />
        <ScNumbersCard>
          {luckyNum?.length > 0
            ? luckyNum.map((item) => <Text>{item}</Text>)
            : "Chưa có dữ liệu"}
        </ScNumbersCard>

        <Text>
          Chúc Mừng!! Các Số Điện Thoại May Mắn, Bạn Đã Trúng Thưởng !!!
        </Text>
        <ScButtons>
          <button className="button-primary" onClick={luckyModal.hide}>
            Xác Nhận
          </button>
        </ScButtons>
      </Wrapper>
    </TrPortal>
  );
};

export default LuckyList;

const ScNumbersCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 400px;
  max-height: 400px;
  padding: 8px;
  border: 2px #ffcd34 solid;
  border-radius: 8px;

  overflow: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }
`;
const Text = styled.h2`
  text-align: center;
  padding: 8px;
  margin: 0;
  color: #3b82f6;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;

  width: 100%;
  /* height: 100%; */
  max-width: 640px;
  max-height: 620px;

  border-radius: 8px;
  background: #fff;
`;
const ScButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 10px;
`;
