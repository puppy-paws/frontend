"use client";

import Link from "next/link";
import * as styles from "./_style/dogStagramPost.css";
import UserProfile from "../../../(commons)/_component/UserProfile";
import Search from "@/app/_assets/images/search.svg";

export default function DogStagramPostList() {
  const posts = Array.from({ length: 10 }, (_, idx) => idx);
  const starDogPosts = Array.from({ length: 4 }, (_, idx) => idx);

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.options}>
          <div className={styles.selectBoxContainer}></div>
          <div className={styles.searchContainer}>
            <input
              className={styles.searchBreed}
              type={"search"}
              placeholder={"견종을 검색해주세요."}
            ></input>
            <Search className={styles.searchLogo} />
          </div>
          <button className={styles.postCreate}>글쓰기</button>
        </div>

        <section className={styles.starDogContainer}>
          <div className={styles.titleContainer}>
            <h1>이번주 스타견</h1>
          </div>
          {starDogPosts.map((communityId) => (
            <Link
              key={communityId}
              href={`/dogstagram`}
              className={styles.cardContainer}
            >
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

              <div className={styles.contentsContainer}>
                <p className={styles.dogName}>뽀미</p>
                <div className={styles.cardInfo}>
                  <p className={styles.contents}>
                    강아지가 너무 온순하고 귀여워서 산책하기 쉬워요. 강아지가
                    너무 쉬워요.
                  </p>

                  <div className={styles.userProfileContainer}>
                    <UserProfile />
                    <p>2024. 03. 01</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>

        <section className={styles.container}>
          <div className={styles.titleContainer}>
            <h1>최신 게시글</h1>
          </div>
          {posts.map((communityId) => (
            <Link
              key={communityId}
              href={`/community/${communityId}`}
              className={styles.cardContainer}
            >
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

              <div className={styles.contentsContainer}>
                <p className={styles.dogName}>뽀미</p>
                <div className={styles.cardInfo}>
                  <p className={styles.contents}>
                    강아지가 너무 온순하고 귀여워서 산책하기 쉬워요. 강아지가
                    너무 쉬워요.
                  </p>

                  <div className={styles.userProfileContainer}>
                    <UserProfile />
                    <p>2024. 03. 01</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </>
  );
}
