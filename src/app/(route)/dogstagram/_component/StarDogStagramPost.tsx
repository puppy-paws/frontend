"use client";

import * as styles from "./_style/dogStagramPost.css";
import DogStagramPostCard from "./DogStagramPostCard";
import { useGetStarDogStagramPostList } from "@/app/_service/dogStagram/useGetStarDogStagramPostList";

export default function StarDogStagramPost() {
  const { starDogStagramPostList } = useGetStarDogStagramPostList();

  return (
    <section className={styles.starDogContainer}>
      <div className={styles.titleContainer}>
        <h1>이번주 스타견</h1>
      </div>
      {starDogStagramPostList?.map((_, idx) => (
        <div key={idx} className={styles.cardContainer}>
          <DogStagramPostCard idx={idx} type={"starDog"} />
        </div>
      ))}
    </section>
  );
}
