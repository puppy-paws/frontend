import { flexColumnContentsCenter } from "./commons.css";
import { style } from "@vanilla-extract/css";
import { global } from "@/app/globaltheme.css";

export const blurContainer = style({
  width: "100dvw",
  height: "100dvh",
  position: "fixed",
  top: "50%",
  left: "50%",
  backdropFilter: "blur(2px)",
  transform: "translate(-50%, -50%)",
});

export const modalContainer = style({
  width: "780px",
  height: "379px",
  display: "flex",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: global.background.color,
  borderRadius: "10px",
});

export const leftContainer = style({
  width: "496px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "70px 0 62px 0",
});

export const rightContainer = style({
  width: "284px",
  position: "relative",
  paddingLeft: "3px",
});

export const signinContainer = style([
  flexColumnContentsCenter,
  {
    flexDirection: "column",
    gap: "20px",
  },
]);

export const closeButton = style({
  position: "absolute",
  right: "10px",
  top: "10px",
  cursor: "pointer",
});

export const signinButton = style({
  cursor: "pointer",
});
