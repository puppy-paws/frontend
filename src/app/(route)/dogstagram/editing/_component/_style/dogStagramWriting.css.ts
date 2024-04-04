import { style } from "@vanilla-extract/css";
import { global } from "@/app/globaltheme.css";
import { flexRowContentsCenter } from "@/app/(commons)/_component/_style/commons.css";

export const container = style({
  width: "30dvw",
  height: "950px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});

export const inputImageSectionContainer = style({
  display: "flex",
  alignItems: "flex-end",
  flexDirection: "column",
  gap: "10px",
});

export const inputImageContainer = style({
  display: "flex",
  alignItems: "flex-end",
  gap: "10px",
});

export const input = style({
  display: "flex",
  paddingLeft: "22px",
  width: "252px",
  height: "42px",
  borderRadius: "10px",
  backgroundColor: global.innerColor.color,
  alignItems: "center",
  fontSize: "14px",
  marginLeft: "32px",
});

export const activeInput = style([
  input,
  {
    cursor: "pointer",
    border: "1px solid black",
    "::placeholder": {
      color: "black",
    },
    ":hover": {
      backgroundColor: "#FFD600",
      borderColor: "#676767",
    },
  },
]);

export const nonActiveInput = style([
  input,
  {
    border: "transparent",
    pointerEvents: "none",
  },
]);

export const labelText = style({
  fontWeight: 700,
  fontSize: "14px",
});

export const contents = style({
  width: "310px",
  height: "129px",
  resize: "none",
  backgroundColor: global.innerColor.color,
  borderRadius: "10px",
  border: "1px solid black",
  marginTop: "24px",
  padding: "13px 22px",
});

export const contentsContainer = style({
  display: "flex",
  flexDirection: "column",
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

export const buttonContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "60px",
});

export const textareaFieldContainer = style({
  width: "315px",
  height: "175px",
  display: "flex",
  marginTop: "60px",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
});

export const galleryIndexIcon = style([
  flexRowContentsCenter,
  {
    borderRadius: "50px",
    alignItems: "center",
    width: "36px",
    height: "22px",
    backgroundColor: "#363636",
    color: global.fontColor.color,
    boxShadow: "1px 1px 1px 1px #0000000D",
    fontSize: "10px",
    opacity: "70%",
  },
]);
