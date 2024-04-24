/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import UserProfile from "@/app/(commons)/_component/UserProfile";
import * as styles from "./_style/dogStagramPost.css";
import HashTag from "./HashTag";
import DogStagramPostLike from "./DogStagramPostLike";

const countNewLines = (str: any) => {
  return (str.match(/\n/g) || []).length;
};

export default function DogStagramPostContents() {
  const [showMore, setShowMore] = useState(true);

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  const text: string = `
  강아지가 너무 온순하고 귀여워서 산책하기 쉬워요.
  귀여운 리트리버 강아지가 너무쉬워요.
  행복하게 해주세요 !

  #골든리트리버
  #대형견
  #반려견도우미구함
  `;

  return (
    <div
      className={
        showMore ? styles.contentsContainer : styles.contentsMoreViewContainer
      }
    >
      <DogStagramPostLike />
      <div className={styles.cardInfo}>
        <p className={showMore ? styles.contents : styles.moreContents}>
          <HashTag text={text} />
        </p>
        {countNewLines(text) > 3 && (
          <button
            className={styles.showMoreButton}
            onClick={handleToggleShowMore}
          >
            {showMore ? "더보기" : "접기"}
          </button>
        )}
        <div className={styles.userProfileContainer}>
          <UserProfile />
          <p className={styles.date}>2024. 03. 01</p>
        </div>
      </div>
    </div>
  );
}
