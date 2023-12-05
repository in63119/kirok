import axiosInstance from './axios.util';

export const registerKidInfos = async (params: {
	parentId: number;
	data: {
		name: string;
		gender: string;
		birth: string;
		profileImageBase64: string;
		institutionName: string;
	}[];
}) => {
	const result = await axiosInstance.post(`/parent/register-kids`, params);

	return result.data;
};
