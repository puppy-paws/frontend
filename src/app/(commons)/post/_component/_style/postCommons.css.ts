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

export const imageContainer = style({
  width: "194px",
  height: "194px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#D9D9D9",
  borderRadius: "10px",
  marginTop: "50px",
  marginBottom: "16px",
  border: "1px solid black",
  objectFit: "contain",
});

export const inputImage = style({
  height: "100%",
});

export const nullInputImage = style({
  height: "70px",
});

export const inputContainer = style({
  width: "100%",
  height: "42px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "18px",
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
