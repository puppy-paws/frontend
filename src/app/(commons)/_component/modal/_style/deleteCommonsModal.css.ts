import { flexRowContentsCenter } from "../../_style/commons.css";
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
  zIndex: 2,
});

export const modalContainer = style({
  width: "365px",
  height: "228px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: global.background.color,
  borderRadius: "10px",
  boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.2)",
});

export const mentContainer = style({
  width: "270px",
  fontSize: "16px",
  fontWeight: "700",
  textAlign: "center",
});

export const activeButton = style([
  flexRowContentsCenter,
  {
    alignItems: "center",
    width: "137px",
    height: "42px",
    backgroundColor: global.background.color,
    borderRadius: "50px",
    fontSize: "14px",
    textAlign: "center",
    marginTop: "10px",
    border: "1px solid black",
    cursor: "pointer",
    ":hover": {
      backgroundColor: global.active.color,
    },
  },
]);

export const buttonContainer = style({
  display: "flex",
  alignItems: "center",
  marginTop: "55px",
  gap: "10px",
});
