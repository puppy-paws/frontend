import { flexRowContentsCenter } from "@/app/(commons)/_component/_style/commons.css";
import { global } from "@/app/globaltheme.css";
import { style } from "@vanilla-extract/css";

export const mainContainer = style({
  width: "100dvw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const container = style({
  display: "flex",
  flexWrap: "wrap",
  padding: "0 40px",
  width: "100%",
  height: "100dvh",
  backgroundColor: global.background.color,
  position: "relative",
  gap: "20px 40px",
  paddingTop: "83px",
  "@media": {
    "(max-width: 750px)": {
      width: "655px",
    },
  },
});

export const starDogContainer = style([
  container,
  {
    height: "auto",
    paddingTop: 0,
  },
]);

export const titleContainer = style({
  width: "100dvw",
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
  right: "28%",
  cursor: "pointer",
  "@media": {
    "(max-width: 1100px)": {
      right: "22%",
    },
    "(max-width: 750px)": {
      right: "7px",
    },
  },
});

export const options = style({
  width: "100dvw",
  display: "flex",
  justifyContent: "flex-end",
  height: "45px",
  backgroundColor: global.background.color,
  margin: "38px 0 31.5px 0",
  padding: "0 40px",

  "@media": {
    "(max-width: 750px)": {
      width: "50%",
      flexDirection: "column",
      height: "140px",
      margin: "0px 0 42px 0",
    },
  },
});

export const mainImageContainer = style({
  width: "100%",
  height: "221px",
});

export const selectBoxContainer = style({
  width: "278px",
  display: "flex",
  gap: "8px",
  "@media": {
    "(max-width: 750px)": {
      justifyContent: "center",
      margin: "-10px 0 10px 0",
    },
  },
});

export const dogImage = style({
  width: "100%",
  maxWidth: "310px",
  borderRadius: "6px 6px 0 0",
});

export const cardInfo = style({
  width: "100%",
  height: "175px",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
});

export const userProfileContainer = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const searchBreed = style({
  width: "69dvw",
  margin: "0px 27.2% 0 6.5%",
  height: "42px",
  backgroundColor: global.innerColor.color,
  borderColor: "transparent",
  outline: "transparent",
  borderRadius: "10px",
  textAlign: "center",
  "@media": {
    "(max-width: 1100px)": {
      width: "58dvw",
      margin: "0 27% 0 7%",
    },
    "(max-width: 750px)": {
      width: "655px",
      margin: 0,
    },
  },
});

export const dogName = style({
  marginTop: "14px",
  fontWeight: "700",
});

export const contentsContainer = style({
  padding: "0 15px 10px 15px",
});

export const contents = style({
  padding: "14px 0 22px 0",
});

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
