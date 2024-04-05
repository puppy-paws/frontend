import { style } from "@vanilla-extract/css";
import { global } from "@/app/globaltheme.css";

export const container = style({
  width: "100dvw",
  height: "100dvh",
  display: "flex",
  justifyContent: "center",
});

export const chatListContainer = style({
  width: "467px",
  height: "100dvh",
  display: "flex",
  flexDirection: "column",
  padding: "55px 0",
  border: "1px solid #DDDDDD",
});

export const chatContainer = style({
  width: "973px",
  height: "100dvh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  border: "1px solid #DDDDDD",
  backgroundColor: global.innerColor.color,
});

export const chatContentsContainer = style({
  width: "100%",
  display: "flex",
});

export const chatContents = style({});

export const chatList = style({
  width: "467px",
  height: "78px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 40px",
  borderBottom: "1px solid #DDDDDD",
  cursor: "pointer",
  ":hover": {
    backgroundColor: global.innerColor.color,
  },
});

export const userProfileImgContainer = style({
  minWidth: "60px",
  maxWidth: "60px",
  height: "60px",
});

export const userProfileImgContentsContainer = style({
  minWidth: "40px",
  maxWidth: "40px",
  height: "40px",
});

export const userProfileImg = style({
  width: "100%",
  height: "100%",
  borderRadius: "50%",
  objectFit: "cover",
});

export const chatDate = style({
  fontSize: "12px",
  color: "#DDDDDD",
});

export const userNickName = style({
  fontSize: "14px",
  fontWeight: "700",
});

export const userChatContents = style({
  width: "92%",
  fontSize: "12px",
  fontWeight: "500",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  textOverflow: "ellipsis",
});

export const chatInputContentsContainer = style({
  position: "relative",
  width: "100%",
  height: "88px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 40px",
  backgroundColor: global.background.color,
});

export const contentsContainer = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "22px 44px",
  gap: "18px",
});

export const myChatContentsContainer = style({
  width: "100%",
  display: "flex",
  gap: "10px",
});

export const myChatContents = style({
  width: "309px",
  display: "flex",
  borderRadius: "10px",
  backgroundColor: global.background.color,
  fontSize: "14px",
  padding: "12px 20px",
});

export const otherChatContentsContainer = style({
  width: "100%",
  display: "flex",
  gap: "10px",
  justifyContent: "flex-end",
});

export const otherChatContents = style({
  width: "309px",
  display: "flex",
  borderRadius: "10px",
  backgroundColor: global.background.color,
  fontSize: "14px",
  padding: "12px 20px",
});

export const contentsDate = style({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  color: "#676767",
  fontSize: "10px",
  fontWeight: "700",
  marginBottom: "34px",
});

export const chatInfo = style({
  position: "relative",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  marginLeft: "17px",
});

export const userInfo = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
});

export const header = style({
  width: "100%",
  height: "55px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 40px",
  backgroundColor: global.background.color,
});

export const other = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "16px",
});

export const chatCount = style({
  width: "18px",
  height: "18px",
  borderRadius: "50px",
  color: global.fontColor.color,
  backgroundColor: "#FF4848",
  fontSize: "12px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: "28px",
  right: 0,
});

export const nonActiveButton = style({
  width: "85px",
  height: "34px",
  backgroundColor: global.nonActive.color,
  borderRadius: "50px",
  fontSize: "14px",
  textAlign: "center",
  border: "1px solid black",
  pointerEvents: "none",
  cursor: "pointer",
});

export const activeButton = style([
  nonActiveButton,
  {
    pointerEvents: "auto",
    cursor: "pointer",
    backgroundColor: global.active.color,

    ":hover": {
      backgroundColor: global.background.color,
    },
  },
]);

export const chatInputContents = style({
  width: "100%",
  height: "50px",
  padding: "17px 16px",
  backgroundColor: global.innerColor.color,
  borderRadius: "10px",
  border: "transparent",
  outline: "transparent",
  position: "relative",
});

export const inputBtnContainer = style({
  cursor: "pointer",
  position: "absolute",
  top: "19px",
  right: "40px",
});
