import { global } from "@/app/globaltheme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  width: "100dvw",
  height: "100dvh",
  backgroundColor: global.background.color,
  position: "relative",
  transition: ".2s ease-in",
});

export const cardContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  padding: "0 25px",
  width: 300,
  height: 340,
  backgroundColor: global.background.color,
  border: `2px solid ${global.border.color}`,
  borderRadius: 30,
  position: "relative",
  cursor: "pointer",
  transition: ".2s ease-in",
});

export const title = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const mainImageContainer = style({
  width: 250,
  height: 180,
});
export const dogImage = style({
  width: "100%",
  maxWidth: 250,
  height: 180,
  borderRadius: 30,
});

export const cardInfo = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const address = style({});
export const status = style({});
