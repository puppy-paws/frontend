import { style } from "@vanilla-extract/css";

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
  objectFit: "contain",
});

export const inputImageContainer = style({
  position: "relative",
});

export const imgDeleteButton = style({
  position: "absolute",
  top: "-10px",
  right: "-10px",
  cursor: "pointer",
});
