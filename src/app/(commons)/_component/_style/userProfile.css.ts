import { style } from "@vanilla-extract/css";

export const userInfo = style({
  display: "flex",
  alignItems: "center",
  gap: 6,
});
export const userProfileImg = style({
  width: 30,
  height: 30,
  display: "block",
  borderRadius: "50%",
  objectFit: "cover",
});
