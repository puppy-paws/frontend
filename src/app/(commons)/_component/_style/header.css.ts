import { global } from "@/app/globaltheme.css";
import { style } from "@vanilla-extract/css";

export const header = style({
  padding: "20px 40px",
  width: "100dvw",
  height: "55px",
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const subHeader = style([
  header,
  {
    padding: 0,
    justifyContent: "center",
  },
]);

export const mainLogoContainer = style({
  cursor: "pointer",
  width: "94px",
  height: "47px",
});

export const menuContainer = style({
  gap: "48px",
  display: "flex",
  justifyContent: "space-between",
});

export const menuStyle = style({
  border: "transparent",
  backgroundColor: global.background.color,
  cursor: "pointer",
  fontSize: "14px",
});

export const linkContainer = style({
  width: "224px",
  gap: "12px",
  display: "flex",
  justifyContent: "space-between",
});

export const linkString = style({
  backgroundColor: global.nonActive.color,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "700",
  width: "106px",
  height: "46px",
  borderRadius: "50px",
  fontSize: "14px",
  cursor: "pointer",
  border: "transparent",
});

export const activeLinkString = style([
  linkString,
  { backgroundColor: global.active.color },
]);
