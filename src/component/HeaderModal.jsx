import React from "react";
import { styled } from "styled-components";
import LogoMain from "../assets/LogoMain";

const HeaderModal = ({ text }) => {
  return (
    <Container>
      <LogoMain size="80" />
      <Text>{text ? text : "Chúc Mừng Bạn Đã Chiến Thắng"}</Text>
    </Container>
  );
};

export default HeaderModal;
const Container = styled.div`
  display: flex;
  width: 100%;

  gap: 8px;
  padding: 8px;
  justify-content: center;
`;
const Text = styled.h2`
  margin: 0;
  color: #3b82f6;
`;
