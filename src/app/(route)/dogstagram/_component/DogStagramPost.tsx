"use client";

import * as styles from "./_style/dogStagramPost.css";
import DogStagramPostCard from "./DogStagramPostCard";
import { useGetDogStagramPostList } from "@/app/_service/dogStagram/useGetDogStagramPostList";
import { Fragment, useEffect, useState } from "react";
import { DogStagramPostListType } from "@/app/_types/dogStagram";
import { useInView } from "react-intersection-observer";
import { searchDogStagramPostState } from "@/app/_store/dogstagram/atoms";
import { useRecoilValue } from "recoil";

export default function DogStagramPost() {
  const searchDogTypeValue = useRecoilValue(searchDogStagramPostState);
  const { ref, inView } = useInView({ threshold: 0, delay: 30 });
  const { dogStagramPostList, fetchNextPage, hasNextPage, isFetching } =
    useGetDogStagramPostList(searchDogTypeValue);
  const lastPageLength = dogStagramPostList?.pages?.at(-1)?.length;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMenuIconClick = (postIdx: number) => {
    setActiveIndex((prevIndex) => (prevIndex === postIdx ? null : postIdx));
  };

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
        (page: DogStagramPostListType[], pageIdx: number) => (
          <Fragment key={pageIdx}>
            {page.map((_, postIdx: number) => (
              <DogStagramPostCard
                key={postIdx}
                idx={pageIdx * 10 + postIdx}
                type={"dog"}
                onMenuIconClick={() => handleMenuIconClick(postIdx)}
                activeIndex={activeIndex}
              />
            ))}
          </Fragment>
        )
      )}
      {lastPageLength !== 0 && (
        <div ref={ref} style={{ width: "100%", height: "50px" }} />
      )}
    </section>
  );
}
