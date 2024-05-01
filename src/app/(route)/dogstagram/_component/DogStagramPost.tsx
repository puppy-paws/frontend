"use client";

import * as styles from "./_style/dogStagramPost.css";
import DogStagramPostCard from "./DogStagramPostCard";
import { useGetDogStagramPostList } from "@/app/_service/dogStagram/useGetDogStagramPostList";
import { Fragment, useEffect } from "react";
import { DogStagramPostListType } from "@/app/_types/dogStagram";
import { useInView } from "react-intersection-observer";

export default function DogStagramPost() {
  const { ref, inView } = useInView({ threshold: 0, delay: 30 });
  const { dogStagramPostList, fetchNextPage, hasNextPage, isFetching } =
    useGetDogStagramPostList();

  const lastPageLength = dogStagramPostList?.pages?.at(-1)?.length;

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
            {page.map((_, idx: number) => (
              <DogStagramPostCard key={idx} type={"dog"} />
            ))}
          </Fragment>
        )
      )}
      {lastPageLength && (
        <div ref={ref} style={{ width: "100%", height: "50px" }} />
      )}
    </section>
  );
}
