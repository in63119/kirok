import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const kakaoState = atom({
  key: "kakao",
  default: {
    kakaoEmail: "",
    isLogin: false,
  },
  effects_UNSTABLE: [persistAtom],
});
