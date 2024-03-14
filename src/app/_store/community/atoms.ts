import { atom } from "recoil";

export const convertedValuesState = atom({
  key: "convertedValuesState",
  default: {
    selectbox: false,
    calender: false,
    textarea: false,
  },
});
