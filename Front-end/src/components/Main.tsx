import React from "react";
import { kakaoLogin } from "../apis/kakao";

const Main = () => {
  const handleClick = async () => {
    await kakaoLogin();
  };
  return (
    <div>
      <div>여긴 메인 페이지 입니다.</div>
      <button onClick={handleClick}>카카오 로그인</button>
    </div>
  );
};

export default Main;
