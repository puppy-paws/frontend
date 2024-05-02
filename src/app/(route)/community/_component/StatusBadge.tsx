"use client";

import * as styles from "./_style/post.css";

interface props {
  status: "Y" | "N";
}

export default function StatusBadge({ status }: props) {
  return (
    <p
      className={
        status === "Y" ? styles.completeStatus : styles.incompleteStatus
      }
    >
      {status === "Y" ? "완료" : "미완료"}
    </p>
  );
}
