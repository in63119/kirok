// Type
import { TinstitutionLogin } from '@kirok-fe/utils/type';

import axios from 'axios';
axios.defaults.withCredentials = true;

const serverURL = process.env.REACT_APP_SERVER_URL;

// 모든 기관 이름 가져오기
export const getAllInstitution = async () => {
	const result = await axios.get(`${serverURL}/institutions/names`);
	return result.data;
};

// 기관 로그인
export const institutionLogin = async (data: TinstitutionLogin) => {
	const result = await axios.get(`${serverURL}/institutions/login?id=${data.id}&password=${data.password}`);
	return result.data;
};
