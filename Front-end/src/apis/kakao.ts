import axios from "axios";
axios.defaults.withCredentials = true;

const apiKey = process.env.REACT_APP_KAKAO_API_KEY;
const redirect_uri = process.env.REACT_APP_REDIRECT_URI;
const kakaoUri = `https://kauth.kakao.com/oauth/authorize?client_id=${apiKey}&redirect_uri=${redirect_uri}&response_type=code`;

const serverURL = process.env.REACT_APP_SERVER_URL;

export const kakaoOpen = async () => {
  window.location.href = kakaoUri;
};

export const postCodeToServer = async (code: string) => {
  const res = await axios.post(`${serverURL}/login/kakao`, { code });

  return res.data;
};
