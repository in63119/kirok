import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const parentsState = atom({
  key: "parent",
  default: {
    institution: "",
    name: "",
    birth: "",
    gender: "",
    isRegistered: false,
  },

  effects_UNSTABLE: [persistAtom],
});
