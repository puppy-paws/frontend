"use client";

import * as styles from "./_style/post.css";

export default function StatusBadge() {
  let status = "미완료"; // 서버에서 받아오는 데이터로 대체 예정

  return (
    <p
      className={
        status === "완료" ? styles.completeStatus : styles.incompleteStatus
      }
    >
      {status}
    </p>
  );
}
