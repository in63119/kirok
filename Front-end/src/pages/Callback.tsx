import React, { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

// recoil
import { useRecoilState } from "recoil";
import { kakaoState } from "../recoil/kakaoState";

// type
import { TkakaoState } from "../utils/type";

// api
import { postCodeToServer } from "../apis/kakao";

const Callback = () => {
  const navigate = useNavigate();
  const codeFromUri =
    new URL(window.location.href).searchParams.get("code") ?? "";
  const [kakaoCode, setKakaoCode] = useRecoilState(kakaoState);

  const handleKakao = useCallback(async () => {
    setKakaoCode((prev: TkakaoState) => ({
      ...prev,
      isLogin: true,
    }));

    if (kakaoCode.isLogin) {
      const result = await postCodeToServer(codeFromUri);
      console.log(result);
      setKakaoCode((prev: TkakaoState) => ({
        ...prev,
        kakaoEmail: result,
      }));
      navigate("/");
    }
  }, [codeFromUri, kakaoCode.isLogin, navigate, setKakaoCode]);

  useEffect(() => {
    console.log(kakaoCode);
    handleKakao();
  }, [kakaoCode.isLogin, handleKakao, kakaoCode]);

  return (
    <div>
      <div>로딩 중...</div>
    </div>
  );
};

export default Callback;
