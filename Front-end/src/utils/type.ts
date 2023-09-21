export type TkakaoState = {
  kakaoEmail: string;
  isLogin: boolean;
};

export type TuserKidsRegist = {
  institution: string;
  birth: string;
  isRegistered: boolean;
  name: string;
  kakaoEmail: string;
  kakaoId: number;
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
