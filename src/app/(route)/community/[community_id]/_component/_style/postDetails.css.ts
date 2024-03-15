import { dogImage } from "./post.css";
import { global } from "@/app/globaltheme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "70dvw",
  height: "auto",
  backgroundColor: global.background.color,
  position: "relative",
});

export const boundary = style({
  width: "70dvw",
  border: `1px solid ${global.border.color}`,
});

export const headerContainer = style({
  width: "70dvw",
  height: "80px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const contentsContainer = style({
  width: "70dvw",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "40px",
});

export const postDetailContainer = style({
  width: "400px",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  border: `1px solid ${global.border.color}`,
  borderRadius: "30px",
  padding: "20px",
});

const button = style({
  borderRadius: "7px",
  width: "80px",
  height: "40px",
  cursor: "pointer",
});

export const applyButton = style([button]);

export const modifyButton = style([button]);

export const deleteButton = style([
  button,
  {
    marginLeft: "15px",
  },
]);

export const postDetailDogImage = style([
  dogImage,
  {
    maxWidth: "300px",
    height: "214px",
    borderRadius: "6px",
  },
]);

export const postDetailContents = style({
  width: "70dvw",
  height: "300px",
  border: `1px solid ${global.border.color}`,
  borderRadius: "30px",
  padding: "20px",
  margin: "40px 0",
});
