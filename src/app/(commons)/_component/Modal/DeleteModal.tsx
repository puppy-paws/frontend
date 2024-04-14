"use client";

import * as styles from "./_style/deleteModal.css";
import { useRouter } from "next/navigation";

export default function DeleteModal() {
  const router = useRouter();

  const handleOnClick = (open: boolean) => {
    router.back();
  };

  return (
    <div className={styles.blurContainer}>
      <div className={styles.modalContainer}>{/* 디자인 예정 */}</div>
    </div>
  );
}
