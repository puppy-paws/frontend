"use client";

import * as styles from "./_style/postDetails.css";
import { useRouter } from "next/navigation";
import BackButton from "@/app/(commons)/post/_component/BackButton";

interface props {
  status: "Y" | "N";
}

export default function PostDetailButtonCotainer({ status }: props) {
  const isMyself = true;

  const router = useRouter();

  const handleOnClick = (url: string) => {
    router.push(url);
  };
  return (
    <section className={styles.buttonContainer}>
      {isMyself ? ( // 토큰에 들어있는 id와 상세조회 id가 같은지 확인하는 로직 필요
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
