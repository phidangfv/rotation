import React from "react";

import "react-wheel-of-prizes/dist/index.css";
import { styled } from "styled-components";
import LogoMain from "../assets/LogoMain";
import useModal from "../hook/useModal";
import HeaderModal from "./HeaderModal";
import TrPortal from "./TrPortal";

const PhoneList = ({
  luckyModal,
  setPhones,
  phones,
  setPhonesOpt,
  setPhoneColor,
}) => {
  const modal = useModal();
  const handleForm = () => {
    // const text = "123,456,789,321,645";
    const values = phones.split(",");
    setPhonesOpt && setPhonesOpt(values);
    const arr = [];
    const colors = [
      "#EE4041",
      "#F0CF51",
      "#815CD1",
      "#3DA5E1",
      "#34A241",
      "#94A241",
    ];
    values.forEach((el) => {
      const item = colors.shift();
      arr.push(item);
      colors.push(item);
    });

    setPhoneColor(arr);
    modal.hide();
  };
  const handleChange = (e) => {
    setPhones(e.target.value);
  };
  return (
    <Container>
      <button className="button-primary" onClick={modal.show}>
        <LogoMain size={24} /> Nhập SĐT
      </button>
      <button className="button-primary" onClick={luckyModal.show}>
        <LogoMain size={24} /> Danh Sách SĐT May Mắn
      </button>
      {modal.visible && (
        <TrPortal open={modal.visible}>
          <Wrapper>
            <HeaderModal text="Danh Sách Số Điện Thoại May Mắn" />
            <ScLabel>Danh sách số điện thoại:</ScLabel>
            <ScTextarea onChange={handleChange} value={phones} />
            <ScButtons>
              <button className="button-primary" onClick={modal.hide}>
                Huỷ
              </button>
              <button className="button-primary" onClick={handleForm}>
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
  width: 80%;
  gap: 10px;
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
