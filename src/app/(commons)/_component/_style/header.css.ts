import { global } from "@/app/globaltheme.css";
import { style } from "@vanilla-extract/css";

export const header = style({
  padding: "0px 20px",
  width: "80dvw",
  height: "50px",
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border: `1px solid ${global.border.color}`,
  borderRadius: "30px",
  marginTop: "10px",
});

export const linkContainer = style({
  width: "180px",
  display: "flex",
  justifyContent: "space-between",
});

export const menuContainer = style({
  width: "120px",
  display: "flex",
  justifyContent: "space-between",
});
