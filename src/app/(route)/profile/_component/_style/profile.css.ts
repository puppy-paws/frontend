import { style } from "@vanilla-extract/css";
import { global } from "@/app/globaltheme.css";

export const container = style({
  width: "30dvw",
  height: "950px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

export const inputImage = style({
  width: "194px",
  height: "194px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#D9D9D9",
  borderRadius: "10px",
  cursor: "pointer",
  marginTop: "50px",
  marginBottom: "16px",
});

export const contentsContainer = style({
  width: "310px",
  display: "flex",
  flexDirection: "column",
  gap: "44px",
});

export const inputContainer = style({
  width: "100%",
  display: "flex",
  marginTop: "18px",
});

export const titleContainer = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "16px",
});

export const input = style({
  width: "100%",
  height: "42px",
  borderRadius: "10px",
  border: "1px solid black",
  padding: "13px 22px",
  fontSize: "14px",
});

export const addDogProfileButton = style({
  width: "100%",
  height: "42px",
  backgroundColor: "transparent",
  border: "transparent",
  outline: "transparent",
  fontSize: "14px",
  fontWeight: "700",
  cursor: "pointer",
  margin: "60px 0",
  ":hover": {
    color: global.active.color,
  },
});

export const duplicationButton = style({
  width: "72px",
  height: "42px",
  backgroundColor: global.background.color,
  borderRadius: "10px",
  border: "1px solid black",
  textAlign: "center",
  cursor: "pointer",
  marginLeft: "6px",
  ":hover": {
    backgroundColor: global.active.color,
  },
});

export const nonActiveButton = style({
  width: "310px",
  height: "42px",
  backgroundColor: global.nonActive.color,
  borderRadius: "50px",
  fontSize: "14px",
  textAlign: "center",
  marginTop: "60px",
  border: "1px solid black",
  pointerEvents: "none",
  cursor: "pointer",
});

export const activeButton = style([
  nonActiveButton,
  {
    pointerEvents: "auto",
    cursor: "pointer",
    backgroundColor: global.background.color,
    ":hover": {
      backgroundColor: global.active.color,
    },
  },
]);

export const warningMent = style({
  fontSize: "12px",
  color: "#FF4848",
});

export const informationMent = style({
  fontSize: "12px",
  color: "black",
});
