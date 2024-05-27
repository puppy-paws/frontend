"use client";

import { useState } from "react";
import * as styles from "./_style/dogStagramPost.css";
import Heart from "@/app/_assets/images/heartIcon.svg";
import HeartSelected from "@/app/_assets/images/heartIcon-selected.svg";
import { useRecoilValue } from "recoil";
import {
  dogStagramPostListState,
  starDogStagramPostListState,
} from "@/app/_store/dogstagram/atoms";
import { DogStagramPostTypeProps } from "@/app/_types/dogStagram";

export default function DogStagramPostLike({
  type,
  idx,
}: DogStagramPostTypeProps) {
  const [selectHeart, setSelectHeart] = useState(true);
  const dogStagramPostData =
    type === "starDog" ? starDogStagramPostListState : dogStagramPostListState;

  const dogStagramPostList = useRecoilValue(dogStagramPostData)[idx];

  if (!dogStagramPostList) {
    return null;
  }

  const {
    is_liked: isLiked,
    total_like: totalLike,
    last_liked_nickname: lastLikedNickname,
  } = dogStagramPostList;

  const handleOnClick = () => {
    setSelectHeart(!selectHeart);
  };

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
