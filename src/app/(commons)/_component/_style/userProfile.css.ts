import { style } from "@vanilla-extract/css";

export const userInfo = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "14px",
  fontWeight: "700",
});
export const userProfileImg = style({
  width: "30px",
  height: "30px",
  display: "block",
  borderRadius: "50%",
  objectFit: "cover",
});
