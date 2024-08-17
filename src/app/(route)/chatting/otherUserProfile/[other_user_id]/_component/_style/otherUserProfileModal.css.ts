import { flexColumnContentsCenter } from "./../../../../../../(commons)/_component/_style/commons.css";
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
  width: "447px",
  maxHeight: "750px",
  display: "flex",
  flexDirection: "column",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: global.background.color,
  borderRadius: "10px",
  boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.2)",
  padding: "25px 43px",
});

export const infoContainer = style([
  flexColumnContentsCenter,
  {
    width: "100%",
    marginTop: "57px",
    alignItems: "center",
  },
]);

export const inputImageContainer = style({
  width: "194px",
  height: "194px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  backgroundColor: "#D9D9D9",
  borderRadius: "10px",
});

export const inputImage = style({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  objectFit: "contain",
});

export const nullInputImage = style({
  width: "100%",
  height: "94px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  objectFit: "contain",
});

export const profileInfoContainer = style({
  width: "100%",
  height: "271px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "50px",
});

export const nickName = style({
  fontSize: "24px",
  fontWeight: "700",
});

export const arrowIcon = style({
  marginLeft: "10px",
  cursor: "pointer",
});

export const otherUserPostContainer = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "6px",
});

export const otherUserCommunityPostContainer = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "12px",
  minHeight: "50px",
  maxHeight: "109px",
  overflow: "auto",
  margin: "5px 0 10px 0",
});

export const otherUserCommunityPost = style({
  width: "100%",
  fontSize: "14px",
  borderBottom: "1px solid #DDDDDD",
  paddingBottom: "12px",
  cursor: "pointer",
});

export const otherUserDogStagramPostContainer = style({
  display: "flex",
  width: "100%",
  height: "130px",
  gap: "10px",
  flexWrap: "wrap",
  overflow: "auto",
});

export const otherUserDogStagramPost = style({
  width: "96px",
  height: "96px",
  borderRadius: "10px",
  backgroundColor: global.innerColor.color,
  cursor: "pointer",
});

export const closeButton = style({
  position: "absolute",
  right: "10px",
  top: "10px",
  cursor: "pointer",
});
