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
