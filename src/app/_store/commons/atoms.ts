import { atom } from "recoil";

export const createDefaultValues = () => ({});

export const emptyRecoilState = atom<any>({
  key: "emptyRecoilState",
  default: { createDefaultValues },
});
