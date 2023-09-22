import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const institutionState = atom({
  key: "institution",
  default: {
    id: "",
    password: "",
    isLogin: false,
    name: "",
  },
  effects_UNSTABLE: [persistAtom],
});
