"use client";

import * as styles from "./_style/dogStagramPost.css";
import DogStagramPostCard from "./DogStagramPostCard";
import { useGetStarDogStagramPostList } from "@/app/_service/dogStagram/useGetStarDogStagramPostList";
import { useState } from "react";

export default function StarDogStagramPost() {
  const { starDogStagramPostList } = useGetStarDogStagramPostList();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMenuIconClick = (postIdx: number) => {
    setActiveIndex((prevIndex) => (prevIndex === postIdx ? null : postIdx));
  };
  return (
    <section className={styles.starDogContainer}>
      <div className={styles.titleContainer}>
        <h1>이번주 스타견</h1>
      </div>
      {starDogStagramPostList?.map((_, idx) => (
        <div key={idx} className={styles.cardContainer}>
          <DogStagramPostCard
            idx={idx}
            type={"starDog"}
            onMenuIconClick={() => handleMenuIconClick(idx)}
            activeIndex={activeIndex}
          />
        </div>
      ))}
    </section>
  );
}
