import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// recoil
import { useRecoilState, useResetRecoilState } from "recoil";
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

  const handleKakao = async () => {
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
  };

  useEffect(() => {
    console.log(kakaoCode);
    handleKakao();
  }, [kakaoCode.isLogin]);

  return (
    <div>
      <div>로딩 중...</div>
    </div>
  );
};

export default Callback;
