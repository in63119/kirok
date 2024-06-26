export type TkakaoState = {
	kakaoEmail: string;
	isLogin: boolean;
};

export type TuserKidsRegist = {
	kakaoId: number;
	requestKidInfo: requestKidInfo;
};

export type TinstitutionState = {
	id: string;
	password: string;
	isLogin: boolean;
};

export type TinstitutionLogin = {
	id: string;
	password: string;
};
type requestKidInfo = {
	institution: string;
	birth: string;
	isRegistered: boolean;
	name: string;
};

export interface RegistrationItem {
	birth: string;
	gender: string;
	institution: string;
	isRegistered?: boolean;
	name: string;
	created_at: string;
	time: string;
}

export type GroupedRequests = {
	[key: string]: RegistrationItem[];
};
