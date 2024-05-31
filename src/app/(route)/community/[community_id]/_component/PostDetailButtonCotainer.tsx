"use client";

import * as styles from "./_style/postDetails.css";
import { useRouter } from "next/navigation";
import BackButton from "@/app/(commons)/post/_component/BackButton";
import { communityDetailPostState } from "@/app/_store/community/atoms";
import { useRecoilValue } from "recoil";
import { useIsMySelfPost } from "@/app/_hooks/useIsMySelfPost";

interface props {
  status: "Y" | "N";
  communityId: number;
}

export default function PostDetailButtonCotainer({
  status,
  communityId,
}: props) {
  const router = useRouter();
  const communityDetailPost = useRecoilValue(communityDetailPostState);
  const { user_id: userId } = communityDetailPost;
  const isMyself = useIsMySelfPost(userId);

  const handleOnClick = (url: string) => {
    router.push(`${communityId}/${url}`);
  };

  return (
    <section className={styles.buttonContainer}>
      {isMyself ? (
        <>
          <button
            onClick={() => handleOnClick("delete")}
            className={styles.activeButton}
          >
            삭제
          </button>
          <button
            onClick={() => handleOnClick("edit")}
            className={styles.activeButton}
          >
            수정
          </button>
        </>
      ) : status === "Y" ? (
        <button className={styles.jobCompletionButton}>구인완료</button>
      ) : (
        <button className={styles.activeButton}>신청</button>
      )}

      <BackButton type={"box"} />
    </section>
  );
}
