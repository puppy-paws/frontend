"use client";

import * as styles from "./_style/dogStagramPost.css";
import DogStagramPostCard from "./DogStagramPostCard";
import { useGetDogStagramPostList } from "@/app/_service/dogStagram/useGetDogStagramPostList";
import { Fragment, useEffect } from "react";
import { DogStagramPostListType } from "@/app/_types/dogStagram";
import { useInView } from "react-intersection-observer";

export default function DogStagramPost() {
  const { ref, inView } = useInView({ threshold: 0, delay: 30 });
  const {
    data: dogStagramPostList,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useGetDogStagramPostList();

  useEffect(() => {
    if (inView && !isFetching && hasNextPage) {
      fetchNextPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchNextPage, inView]);

  return (
    <section className={styles.container}>
      <div className={styles.titleContainer}>
        <h1>최신 게시글</h1>
      </div>
      {dogStagramPostList?.pages.map(
        (page: DogStagramPostListType[], idx: number) => (
          <Fragment key={idx}>
            {page.map((post: DogStagramPostListType, idx: number) => (
              <div key={idx} className={styles.cardContainer}>
                <DogStagramPostCard props={post} />
              </div>
            ))}
          </Fragment>
        )
      )}
      <div ref={ref} style={{ height: 50 }} />
    </section>
  );
}
