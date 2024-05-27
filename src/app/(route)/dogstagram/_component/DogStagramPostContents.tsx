/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import UserProfile from "@/app/(commons)/_component/UserProfile";
import * as styles from "./_style/dogStagramPost.css";
import HashTag from "./HashTag";
import DogStagramPostLike from "./DogStagramPostLike";
import { formatTime } from "@/app/_utils/formatTime";
import { useRecoilValue } from "recoil";
import { DogStagramPostTypeProps } from "@/app/_types/dogStagram";
import {
  dogStagramPostListState,
  starDogStagramPostListState,
} from "@/app/_store/dogstagram/atoms";

export default function DogStagramPostContents({
  idx,
  type,
}: DogStagramPostTypeProps) {
  const [showMore, setShowMore] = useState(true);
  const dogStagramPostData =
    type === "starDog" ? starDogStagramPostListState : dogStagramPostListState;

  const dogStagramPostList = useRecoilValue(dogStagramPostData)[idx];

  if (!dogStagramPostList) {
    return null;
  }

  const {
    id,
    user_id: userId,
    description,
    created_at: createdAt,
    nickname,
    profile_url: profileUrl,
  } = dogStagramPostList;

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
      <DogStagramPostLike idx={idx} type={type} />
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
          <UserProfile nickname={nickname} profileUrl={profileUrl} />
          <p className={styles.date}>{formatTime(createdAt)}</p>
        </div>
      </div>
    </div>
  );
}
