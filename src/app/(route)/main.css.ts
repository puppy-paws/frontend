import { style } from "@vanilla-extract/css";
import { global } from "../globaltheme.css";
export const container = style({
  display: "flex",
  flexDirection: "column",
  backgroundColor: global.background.color,
  width: "100dvw",
  height: "100dvh",
});
