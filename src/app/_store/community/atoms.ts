import { ConvertedPostValues } from "@/app/_types/community";
import { atom } from "recoil";

export const createDefaultValues = (): ConvertedPostValues => ({
  selectbox: false,
  calender: false,
  textarea: false,
});

export const convertedPostValuesState = atom({
  key: "convertedPostValuesState",
  default: createDefaultValues(),
});
