"use client";

import UserProfile from "@/app/(commons)/_component/UserProfile";
import * as styles from "../_component/_style/postDetails.css";

export default function PostDetails({
  params,
}: {
  params: { community_id: string };
}) {
  const communityId = params.community_id;
  const status = true;

  return (
    <>
      <main className={styles.container}>
        <section className={styles.headerContainer}>
          <h4>구인 상태</h4>
          {!status ? (
            <button className={styles.applyButton}>신청</button>
          ) : (
            <div>
              <button className={styles.modifyButton}>수정</button>
              <button className={styles.deleteButton}>삭제</button>
            </div>
          )}
        </section>
        <hr className={styles.boundary} />
        <section className={styles.headerContainer}>
          <UserProfile />
          <p>2022. 02. 14</p>
        </section>
        <section className={styles.contentsContainer}>
          <img
            src={
              "https://images.dog.ceo//breeds//retriever-chesapeake//n02099849_3007.jpg"
            }
            alt={`Dog Image`}
            className={styles.postDetailDogImage}
          />
          <div className={styles.postDetailContainer}>
            {" "}
            <p>견종 : </p>
            <p>특징 : </p>
            <p>원하는 픽업 위치</p>
            <p>원하는 산책 날짜, 시간</p>
          </div>
        </section>
        <hr className={styles.boundary} />
        <div className={styles.postDetailContents}>안녕하세용</div>
      </main>
    </>
  );
}
