import React from "react";
import styled from "styled-components";

// recoil
import { useRecoilValue } from "recoil";
import { kakaoState } from "../recoil/kakaoState";

// api
import { kakaoOpen } from "../apis/kakao";

const ShortBtn = (props: any) => {
  const { title, btncolor } = props;
  const { isLogin } = useRecoilValue(kakaoState);

  const handleClick = () => {
    if (title === "부모님용" && !isLogin) {
      kakaoOpen();
    }
  };

  return (
    <Container btncolor={btncolor} onClick={handleClick}>
      <Title>{title}</Title>
    </Container>
  );
};

export default ShortBtn;

const Container = styled.div<{ btncolor: boolean }>`
  background-color: ${({ btncolor }) => (btncolor ? "#55B5E6" : "#A1DC2E")};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 168px;
  height: 54px;
  border-radius: 14px;
`;

const Title = styled.div`
  color: #ffffff;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
`;
