import React from "react";
import { styled } from "styled-components";

// Recoil
import { useRecoilValue } from "recoil";
import { kakaoState } from "../recoil/kakaoState";

// Api
import { kakaoOpen } from "../apis/kakao";

const Login = () => {
  const { isLogin } = useRecoilValue(kakaoState);

  const handleClick = () => {
    !isLogin && kakaoOpen();
    console.log("ok");
  };
  return (
    <Container>
      <UpperWrap>
        <Title>부모님 로그인</Title>
        <Img src="/images/login_paper.png" />
      </UpperWrap>
      <LowerWrap>
        <Content>카카오 로그인으로 간단하게 시작해볼까요?</Content>
        <LoginBtn onClick={handleClick} src="/images/login_btn.png"></LoginBtn>
      </LowerWrap>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UpperWrap = styled.div`
  margin: 120px 0 50px;
`;

const Img = styled.img`
  width: 124px;
  height: 124px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
`;

const LowerWrap = styled.div``;

const Content = styled.div`
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  color: #555555;
  text-align: center;
`;

const LoginBtn = styled.img`
  cursor: pointer;
  width: 335px;
  height: 54px;
`;
