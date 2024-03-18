import { ConvertedProfileValues } from "@/app/_types/profile";
import { atom } from "recoil";

export const createDefaultValues = (): ConvertedProfileValues => ({
  nickname: false,
  email: false,
});

export const convertedProfileValuesState = atom({
  key: "convertedProfileValuesState",
  default: createDefaultValues(),
});
