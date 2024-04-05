"use client";

import * as styles from "./_style/chatting.css";
import InputBtnUnHover from "@/app/_assets/images/up-arrow2-unhover.svg";
import InputBtnHover from "@/app/_assets/images/up-arrow2-hover.svg";
import { useState } from "react";

export default function ChatContentsInput() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className={styles.chatInputContentsContainer}>
      <input className={styles.chatInputContents}></input>
      <div
        className={styles.inputBtnContainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered ? <InputBtnUnHover /> : <InputBtnHover />}
      </div>
    </div>
  );
}
