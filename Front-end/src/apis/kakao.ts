import axios from "axios";
// axios.defaults.withCredentials = true;

const apiKey = process.env.REACT_APP_KAKAO_API_KEY;
const redirect_uri = "http://localhost:3000/kakao";
const kakaoUri = `https://kauth.kakao.com/oauth/authorize?client_id=${apiKey}&redirect_uri=${redirect_uri}&response_type=code`;

export const kakaoLogin = async () => {
  window.location.href = kakaoUri;
};
