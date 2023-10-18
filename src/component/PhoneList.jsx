import React, { useState } from "react";

import "react-wheel-of-prizes/dist/index.css";
import { styled } from "styled-components";
import LogoMain from "../assets/LogoMain";
import useModal from "../hook/useModal";
import HeaderModal from "./HeaderModal";
import TrPortal from "./TrPortal";

const PhoneList = () => {
  const [data, setData] = useState("");
  const modal = useModal();
  const handleChange = (e) => {
    setData(e.target.value);
  };

  return (
    <Container>
      <button className="button-primary" onClick={modal.show}>
        <LogoMain size={24} /> Nhập SĐT
      </button>
      {modal.visible && (
        <TrPortal open={modal.visible}>
          <Wrapper>
            <HeaderModal text="Danh Sách Số Điện Thoại May Mắn" />
            <ScLabel>Danh sách số điện thoại:</ScLabel>
            <ScTextarea onChange={handleChange} value={data} />
            <ScButtons>
              <button className="button-primary" onClick={modal.hide}>
                Huỷ
              </button>
              <button className="button-primary" onClick={modal.hide}>
                Xác Nhận
              </button>
            </ScButtons>
          </Wrapper>
        </TrPortal>
      )}
    </Container>
  );
};

export default PhoneList;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
`;
const ScButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;
  padding: 20px;

  width: 100%;
  height: 100%;
  max-width: 640px;
  max-height: 380px;

  border-radius: 8px;
  background: #fff;
`;
const ScLabel = styled.div`
  width: 100%;
`;
const ScTextarea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 10px;

  border-radius: 8px;
  font-size: 16px;
  resize: none;

  border-color: #3b82f6;
`;
