"use client";

import UserProfile from "@/app/(commons)/_component/UserProfile";
import { useState } from "react";
import * as styles from "./_style/post.css";

interface props {
  data: any;
}

export default function Post({ data }: props) {
  let status = "미완료"; // 서버에서 받아오는 데이터로 대체 예정

  const text = `강아지가 너무 온순하고 귀여워서 산책하기 쉬워요.
    귀여운 리트리버 강아지가 너무쉬워요.
    행복하게 해주세요 !
  `;

  return (
    <>
      <div className={styles.mainImageContainer}>
        <img
          key={data}
          src={
            "https://images.dog.ceo//breeds//retriever-chesapeake//n02099849_3007.jpg"
          }
          alt={`Dog ${data}`}
          className={styles.dogImage}
        />
      </div>
      <p
        className={
          status === "완료" ? styles.completeStatus : styles.incompleteStatus
        }
      >
        {status}
      </p>
      <div className={styles.contentsContainer}>
        <p className={styles.address}>서울 강동구</p>
        <div className={styles.contents}>{text}</div>
        <p className={styles.dogBreed}>#골든 리트리버</p>
        <div className={styles.cardInfo}>
          <UserProfile />
          <p className={styles.date}>2024. 03. 01</p>
        </div>
      </div>
    </>
  );
}
