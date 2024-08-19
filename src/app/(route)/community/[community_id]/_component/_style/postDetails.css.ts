import { flexRowContentsCenter } from "@/app/(commons)/_component/_style/commons.css";
import { global } from "@/app/globaltheme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "600px",
  height: "1050px",
  backgroundColor: global.background.color,
  position: "relative",
});

export const headerContainer = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const postDetailContainer = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "31px",
});

export const userInfoContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
});

export const contentsContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginTop: "60px",
});

export const buttonContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "50px",
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

export const dogImage = style({
  width: "194px",
  borderRadius: "10px",
  height: "100%",
});

export const nullDogImage = style({
  height: "70px",
});

export const createTime = style({
  width: "300px",
  fontSize: "14px",
  position: "absolute",
  top: "32px",
  left: "39px",
});

export const nonActiveButton = style([
  flexRowContentsCenter,
  {
    alignItems: "center",
    width: "310px",
    height: "42px",
    backgroundColor: global.background.color,
    borderRadius: "50px",
    fontSize: "14px",
    textAlign: "center",
    marginTop: "10px",
    border: "1px solid black",
    pointerEvents: "none",
    cursor: "pointer",
  },
]);

export const activeButton = style([
  nonActiveButton,
  {
    pointerEvents: "auto",
    cursor: "pointer",
    ":hover": {
      backgroundColor: global.active.color,
    },
  },
]);

export const badge = style({
  position: "relative",
  width: "22px",
  height: "39px",
});

export const contents = style({
  width: "310px",
  height: "129px",
  backgroundColor: "#EBEBEB",
  borderRadius: "10px",
  padding: "13px 22px",
  marginTop: "24px",
  fontSize: "14px",
});

export const jobCompletionButton = style({
  width: "310px",
  height: "42px",
  backgroundColor: global.nonActive.color,
  borderRadius: "50px",
  fontSize: "14px",
  textAlign: "center",
  marginTop: "10px",
  border: "transparent",
  pointerEvents: "none",
  cursor: "pointer",
});

export const inputImage = style({
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
});
