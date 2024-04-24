"use client";

import { useState } from "react";
import * as styles from "./_style/dogStagramPost.css";
import Heart from "@/app/_assets/images/heartIcon.svg";
import HeartSelected from "@/app/_assets/images/heartIcon-selected.svg";

export default function DogStagramPostLike() {
  const [selectHeart, setSelectHeart] = useState(true);

  const handleOnClick = () => {
    setSelectHeart(!selectHeart);
  };

  return (
    <div className={styles.likeContainer}>
      <p className={styles.likeCount}>지연0392 님 외 103명이 좋아합니다</p>
      {selectHeart ? (
        <Heart className={styles.heartIcon} onClick={handleOnClick} />
      ) : (
        <HeartSelected className={styles.heartIcon} onClick={handleOnClick} />
      )}
    </div>
  );
}
