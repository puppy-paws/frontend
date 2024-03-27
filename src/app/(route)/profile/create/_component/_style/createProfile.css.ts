import { style } from "@vanilla-extract/css";
import { global } from "@/app/globaltheme.css";

export const container = style({
  width: "310px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  paddingBottom: "30px",
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
  border: "1px solid black",
});

export const contentsContainer = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "44px",
});

export const inputFieldContainer = style({
  width: "100%",
  display: "flex",
  marginTop: "18px",
  height: "42px",
  alignItems: "center",
  justifyContent: "center",
});

export const inputContainer = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "3px",
});

export const textareaFieldContainer = style({
  width: "100%",
  display: "flex",
  marginTop: "18px",
  height: "129px",
  alignItems: "center",
  justifyContent: "center",
});

export const inputImageContainer = style({
  width: "100%",
  display: "flex",
  marginTop: "18px",
  height: "194px",
  alignItems: "center",
});

export const textareaContainer = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "3px",
});

export const titleContainer = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "16px",
});

export const puppyInfoTitleContainer = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
});

export const puppyInfoContainer = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "44px",
});

export const input = style({
  width: "100%",
  height: "42px",
  borderRadius: "10px",
  border: "1px solid black",
  padding: "13px 22px",
  fontSize: "14px",
  backgroundColor: global.innerColor.color,
});

export const activeInput = style([
  input,
  {
    border: "1px solid black",
  },
]);

export const nonActiveInput = style([
  input,
  {
    border: "transparent",
    pointerEvents: "none",
  },
]);

export const textarea = style({
  width: "100%",
  height: "129px",
  borderRadius: "10px",
  border: "1px solid black",
  padding: "13px 22px",
  fontSize: "14px",
  backgroundColor: global.innerColor.color,
  resize: "none",
});

export const labelText = style({
  fontWeight: 700,
  fontSize: "14px",
  width: "58px",
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

export const puppyInfoDeleteButton = style({
  fontSize: "12px",
  color: "black",
  border: "transparent",
  backgroundColor: "transparent",
  cursor: "pointer",
});

export const errorMessage = style({
  fontSize: "10px",
});

export const profileImage = style({});

export const dogPersonalityContainer = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

export const dogPersonalityValueContainer = style({
  width: "100%",
  display: "flex",
  gap: "6px",
  margin: "12px 0 0 48px",
});

export const dogPersonality = style({
  width: "95px",
  height: "24px",
  borderRadius: "50px",
  border: "transparent",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: global.innerColor.color,
  fontSize: "12px",
  color: "#676767",
  gap: "10px",
  zIndex: "2",
});
