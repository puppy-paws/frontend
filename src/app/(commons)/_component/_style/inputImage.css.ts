import { style } from "@vanilla-extract/css";

export const inputImage = style({
  position: "relative",
  width: "194px",
  height: "194px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#D9D9D9",
  borderRadius: "10px",
  cursor: "pointer",
  objectFit: "contain",
});

export const imageDeleteButton = style({
  position: "absolute",
  top: "-9px",
  right: "-9px",
  cursor: "pointer",
});
