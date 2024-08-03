import { flexRowContentsCenter } from "@/app/(commons)/_component/_style/commons.css";
import { global } from "@/app/globaltheme.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const mainContainer = style({
  width: "100dvw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const container = style({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  width: "100%",
  height: "100dvh",
  backgroundColor: global.background.color,
  position: "relative",
  gap: "40px",
  "@media": {
    "(max-width: 750px)": {
      width: "655px",
    },
  },
});

export const filterContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  left: "40px",
  position: "fixed",
  width: "310px",
  height: "204px",
});

export const cardContainer = style({
  display: "flex",
  flexDirection: "column",
  width: "310px",
  height: "429px",
  backgroundColor: global.background.color,
  border: `1px solid #ddd`,
  borderRadius: "10px",
  position: "relative",
  cursor: "pointer",
});

export const searchContainer = style({
  display: "flex",
  position: "relative",
  alignItems: "center",
});

export const searchLogo = style({
  position: "absolute",
  right: "25%",
  cursor: "pointer",
  "@media": {
    "(max-width: 1100px)": {
      position: "absolute",
      right: "22%",
    },
    "(max-width: 750px)": {
      right: "7px",
    },
  },
});

export const filterLogo = style({
  "@media": {
    "(max-width: 750px)": {
      display: "none",
    },
  },
});

export const options = style({
  width: "100dvw",
  display: "flex",
  justifyContent: "space-between",
  height: "45px",
  backgroundColor: global.background.color,
  margin: "38px 0 80px 0",
  padding: "0 40px",

  "@media": {
    "(max-width: 750px)": {
      width: "50%",
      flexDirection: "column",
      height: "140px",
      margin: "38px 0",
    },
  },
});

export const selectBoxContainer = style({
  display: "flex",
  gap: "8px",
  "@media": {
    "(max-width: 750px)": {
      justifyContent: "center",
      margin: "-10px 0 10px 0",
    },
  },
});

export const mainImageContainer = style([
  flexRowContentsCenter,
  {
    alignItems: "center",
    position: "relative",
    width: "100%",
    height: "221px",
    backgroundColor: global.innerColor.color,
  },
]);

export const dogImage = style({
  width: "100%",
  maxWidth: "310px",
  borderRadius: "6px 6px 0 0",
  height: "100%",
  objectFit: "contain",
});

export const cardInfo = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  width: "91%",
  position: "absolute",
  bottom: "7px",
});

export const searchBreed = style({
  width: "50dvw",
  height: "42px",
  backgroundColor: global.innerColor.color,
  borderColor: "transparent",
  outline: "transparent",
  borderRadius: "10px",
  textAlign: "center",
});

export const address = style({
  fontSize: "14px",
  fontWeight: "700",
});

export const completeStatus = style([
  flexRowContentsCenter,
  {
    width: "39px",
    height: "22px",
    borderRadius: "50px",
    backgroundColor: global.active.color,
    fontWeight: 700,
    fontSize: "10px",
    position: "absolute",
    alignItems: "center",
    top: "9px",
    right: "15px",
  },
]);

export const incompleteStatus = style([
  completeStatus,
  flexRowContentsCenter,
  {
    backgroundColor: global.nonActive.color,
  },
]);

export const contentsContainer = style({
  padding: "14px 15px 10px 15px",
  maxHeight: "0",
});

export const contents = style({
  padding: "14px 0 22px 0",
  fontSize: "12px",
});

export const dogBreed = style([
  flexRowContentsCenter,
  {
    position: "absolute",
    bottom: "50px",
    alignItems: "center",
    width: "111px",
    height: "24px",
    borderRadius: "50px",
    backgroundColor: global.innerColor.color,
    fontSize: "12px",
    color: "#676767",
  },
]);

export const postCreate = style([
  flexRowContentsCenter,
  {
    fontWeight: 500,
    fontSize: "14px",
    alignItems: "center",
    width: "79px",
    minWidth: "79px",
    height: "42px",
    backgroundColor: global.background.color,
    border: `1px solid ${global.border.color}`,
    borderRadius: "50px",
    cursor: "pointer",

    ":hover": {
      backgroundColor: global.border.color,
      border: "transparent",
      color: "white",
    },
    "@media": {
      "(max-width: 750px)": {
        margin: "8px auto 0 auto",
      },
    },
  },
]);

export const date = style({
  fontSize: "12px",
});

export const searchValueClearButton = style({
  position: "absolute",
  cursor: "pointer",
  right: "10px",
});
