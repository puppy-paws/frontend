import { style } from "@vanilla-extract/css";
import { global } from "../globaltheme.css";

export const container = style({
  width: "100dvw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: global.background.color,
  gap: 30,
});
