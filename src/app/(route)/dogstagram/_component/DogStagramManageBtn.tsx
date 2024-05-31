"use client";

import { useRouter } from "next/navigation";
import * as styles from "./_style/dogStagramPost.css";

type PostIdProps = {
  dogStagramPostId: number;
};

export default function DogStagramManageBtn({ dogStagramPostId }: PostIdProps) {
  const router = useRouter();

  const handleMoveDogStagramPostDelete = () => {
    router.push(`dogstagram/${dogStagramPostId}/delete`);
  };

  const handleMoveDogStagramPostEdit = () => {
    router.push(`dogstagram/${dogStagramPostId}/edit`);
  };

  return (
    <div className={styles.menuIconContainer}>
      <div className={styles.menuContainer}>
        <div onClick={handleMoveDogStagramPostEdit} className={styles.editBtn}>
          수정
        </div>
        <div
          onClick={handleMoveDogStagramPostDelete}
          className={styles.deleteBtn}
        >
          삭제
        </div>
      </div>
    </div>
  );
}
