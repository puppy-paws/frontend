"use client";

import * as styles from "./_style/post.css";
import Post from "./Post";
import { useGetCommnunityPostList } from "@/app/_service/community/useGetCommnunityPostList";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { CommunityPostListType } from "@/app/_types/community";
import CommunityHeader from "./CommunityHeader";

export default function PostList() {
  const { ref, inView } = useInView({ threshold: 0, delay: 30 });
  const { communityPostList, fetchNextPage, hasNextPage, isFetching } =
    useGetCommnunityPostList();

  const lastPageLength = communityPostList?.pages?.at(-1)?.length;

  useEffect(() => {
    if (inView && !isFetching && hasNextPage) {
      fetchNextPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchNextPage, inView]);

  return (
    <>
      <CommunityHeader />
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          {communityPostList?.pages.map(
            (page: CommunityPostListType[], pageIdx: number) => (
              <Fragment key={pageIdx}>
                {page.map((_, postIdx: number) => (
                  <Post key={postIdx} idx={pageIdx * 10 + postIdx} />
                ))}
              </Fragment>
            )
          )}
          {lastPageLength !== 0 && (
            <div ref={ref} style={{ width: "100%", height: "50px" }} />
          )}
        </div>
      </div>
    </>
  );
}
