import Link from "next/link";
import * as styles from "./_style/dogStagramPost.css";
import UserProfile from "../../../(commons)/_component/UserProfile";
import Search from "@/app/_assets/images/search.svg";

import DogStagramPost from "./dogStagramPost";

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
            <div key={communityId} className={styles.cardContainer}>
              <DogStagramPost props={communityId} />
            </div>
          ))}
        </section>

        <section className={styles.container}>
          <div className={styles.titleContainer}>
            <h1>최신 게시글</h1>
          </div>
          {posts.map((communityId) => (
            <div key={communityId} className={styles.cardContainer}>
              <DogStagramPost props={communityId} />
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
