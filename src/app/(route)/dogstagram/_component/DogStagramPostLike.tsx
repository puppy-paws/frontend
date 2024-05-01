"use client";

import { useState } from "react";
import * as styles from "./_style/dogStagramPost.css";
import Heart from "@/app/_assets/images/heartIcon.svg";
import HeartSelected from "@/app/_assets/images/heartIcon-selected.svg";
import { dogStagramPostListState } from "@/app/_store/dogstagram/dogStagramPostListState";
import { useRecoilValue } from "recoil";

export default function DogStagramPostLike({}) {
  const [dogStagramPostData] = useRecoilValue(dogStagramPostListState);
  const {
    is_liked: isLiked,
    total_like: totalLike,
    last_liked_nickname: lastLikedNickname,
  } = dogStagramPostData;
  const [selectHeart, setSelectHeart] = useState(true);

  const handleOnClick = () => {
    setSelectHeart(!selectHeart);
  };

  // 좋아요 누르고 안누르고 기능 추가 필요

  return (
    <div className={styles.likeContainer}>
      <p className={styles.likeCount}>
        {totalLike > 1
          ? `${lastLikedNickname}님 외 ${totalLike}명이 좋아합니다.`
          : `${totalLike}명이 좋아합니다.`}
      </p>
      {selectHeart ? (
        <Heart className={styles.heartIcon} onClick={handleOnClick} />
      ) : (
        <HeartSelected className={styles.heartIcon} onClick={handleOnClick} />
      )}
    </div>
  );
}
