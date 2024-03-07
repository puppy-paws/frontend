"use client";

import UserProfile from "@/app/(commons)/_component/UserProfile";
import { useState } from "react";
import * as styles from "./_style/dogStagramPost.css";
import Heart from "@/app/_assets/images/heartIcon.svg";
import HeartSelected from "@/app/_assets/images/heartIcon-selected.svg";
import HashTag from "./HashTag";

const countNewLines = (str: any) => {
  return (str.match(/\n/g) || []).length;
};

export default function DogStagramPost(communityId: any) {
  const [showMore, setShowMore] = useState(true);
  const [selectHeart, setSelectHeart] = useState(true);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleOnClick = () => {
    setSelectHeart(!selectHeart);
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
    <>
      <div className={styles.mainImageContainer}>
        <img
          key={communityId}
          src={
            "https://images.dog.ceo//breeds//retriever-chesapeake//n02099849_3007.jpg"
          }
          alt={`Dog ${communityId}`}
          className={styles.dogImage}
        />
      </div>

      <div
        className={
          showMore ? styles.contentsContainer : styles.contentsMoreViewContainer
        }
      >
        <div className={styles.likeContainer}>
          <p className={styles.likeCount}>지연0392 님 외 103명이 좋아합니다</p>
          {selectHeart ? (
            <Heart className={styles.heartIcon} onClick={handleOnClick} />
          ) : (
            <HeartSelected
              className={styles.heartIcon}
              onClick={handleOnClick}
            />
          )}
        </div>
        <div className={styles.cardInfo}>
          <p className={showMore ? styles.contents : styles.moreContents}>
            <HashTag text={text} />
          </p>
          {countNewLines(text) > 3 && (
            <button className={styles.showMoreButton} onClick={toggleShowMore}>
              {showMore ? "더보기" : "접기"}
            </button>
          )}
          <div className={styles.userProfileContainer}>
            <UserProfile />
            <p className={styles.date}>2024. 03. 01</p>
          </div>
        </div>
      </div>
    </>
  );
}
