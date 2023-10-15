import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const addKidsState = atom({
  key: "addKids",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
