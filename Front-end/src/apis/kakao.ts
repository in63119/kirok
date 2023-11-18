import axios from 'axios';
axios.defaults.withCredentials = true;

const apiKey = process.env.REACT_APP_KAKAO_API_KEY;
const currentUrl = window.location.host;
const { REACT_APP_LOCAL_REDIRECT_URI, REACT_APP_PROD_REDIRECT_URI } = process.env;
const redirect_uri = currentUrl === 'localhost:3000' ? REACT_APP_LOCAL_REDIRECT_URI : REACT_APP_PROD_REDIRECT_URI;
const kakaoUri = `https://kauth.kakao.com/oauth/authorize?client_id=${apiKey}&redirect_uri=${redirect_uri}&response_type=code`;

const serverURL = process.env.REACT_APP_SERVER_URL;

export const kakaoOpen = async () => {
	window.location.href = kakaoUri;
};

export const postCodeToServer = async (code: string) => {
	const res = await axios.post(`${serverURL}/login/kakao`, { code });

	return res.data;
};
