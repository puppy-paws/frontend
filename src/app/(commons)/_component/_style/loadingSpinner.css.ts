import { flexRowContentsCenter } from "@/app/(commons)/_component/_style/commons.css";
import { style } from "@vanilla-extract/css";
import { global } from "@/app/globaltheme.css";

export const blurContainer = style([
  flexRowContentsCenter,
  {
    width: "100dvw",
    height: "100dvh",
    position: "fixed",
    top: "50%",
    left: "50%",
    backdropFilter: "blur(2px)",
    transform: "translate(-50%, -50%)",
    alignItems: "center",
  },
]);

export const spinner = style({
  width: "120px",
  height: "120px",
});
