"use client";

import * as styles from "./_style/profile.css";
import UpArrow from "@/app/_assets/images/up-arrow.svg";
import DownArrow from "@/app/_assets/images/down-arrow.svg";
import { useState } from "react";

export default function MyPostList() {
  const [showCommunityPost, setShowCommunityPost] = useState(false);
  const [showDogStagramPost, setShowDogStagramPost] = useState(false);
  return (
    <>
      <div className={styles.myPostContainer}>
        <h5>커뮤니티</h5>
        <p>
          2개
          {showCommunityPost ? (
            <UpArrow
              onClick={() => setShowCommunityPost(!showCommunityPost)}
              className={styles.arrowIcon}
            />
          ) : (
            <DownArrow
              onClick={() => setShowCommunityPost(!showCommunityPost)}
              className={styles.arrowIcon}
            />
          )}
        </p>
      </div>
      {showCommunityPost && (
        <div className={styles.myCommunityPostContainer}>
          <p className={styles.myCommunityPost}>
            2024년 3월 24일 픽업 | 서울 서대문구
          </p>
          <p className={styles.myCommunityPost}>
            2024년 3월 21일 픽업 | 서울 영등포구
          </p>
        </div>
      )}

      <div className={styles.myPostContainer}>
        <h5>견스타그램</h5>
        <p>
          5개
          {showDogStagramPost ? (
            <UpArrow
              onClick={() => setShowDogStagramPost(!showDogStagramPost)}
              className={styles.arrowIcon}
            />
          ) : (
            <DownArrow
              onClick={() => setShowDogStagramPost(!showDogStagramPost)}
              className={styles.arrowIcon}
            />
          )}
        </p>
      </div>
      {showDogStagramPost && (
        <div className={styles.myDogStagramPostContainer}>
          <div className={styles.myDogStagramPost}></div>
          <div className={styles.myDogStagramPost}></div>
          <div className={styles.myDogStagramPost}></div>
          <div className={styles.myDogStagramPost}></div>
          <div className={styles.myDogStagramPost}></div>
        </div>
      )}
    </>
  );
}
