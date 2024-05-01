/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import UserProfile from "@/app/(commons)/_component/UserProfile";
import * as styles from "./_style/dogStagramPost.css";
import HashTag from "./HashTag";
import DogStagramPostLike from "./DogStagramPostLike";
import { formatTime } from "@/app/_utils/formatTime";
import { useRecoilValue } from "recoil";
import { dogStagramPostListState } from "@/app/_store/dogstagram/dogStagramPostListState";
import { starDogStagramPostListState } from "@/app/_store/dogstagram/starDogStagramPostListState";
import { DogStagramPostTypeProps } from "@/app/_types/dogStagram";

export default function DogStagramPostContents({
  type,
}: DogStagramPostTypeProps) {
  const dogStagramPostData =
    type === "starDog" ? starDogStagramPostListState : dogStagramPostListState;

  const [dogStagramPostList] = useRecoilValue(dogStagramPostData);

  const {
    id,
    user_id: userId,
    description,
    created_at: createdAt,
  } = dogStagramPostList;

  const [showMore, setShowMore] = useState(true);

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  const countNewLines = (str: any) => {
    return str.split("\n").length - 1;
  };

  return (
    <div
      className={
        showMore ? styles.contentsContainer : styles.contentsMoreViewContainer
      }
    >
      <DogStagramPostLike />
      <div className={styles.cardInfo}>
        <p className={showMore ? styles.contents : styles.moreContents}>
          <HashTag text={description} />
        </p>
        {countNewLines(description) > 3 && (
          <button
            className={styles.showMoreButton}
            onClick={handleToggleShowMore}
          >
            {showMore ? "더보기" : "접기"}
          </button>
        )}
        <div className={styles.userProfileContainer}>
          <UserProfile userId={userId} />
          <p className={styles.date}>{formatTime(createdAt)}</p>
        </div>
      </div>
    </div>
  );
}
