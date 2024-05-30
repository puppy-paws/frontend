"use client";

import * as styles from "./_style/deleteCommonsModal.css";
import { useRouter } from "next/navigation";
import { useDeleteCommunityPost } from "@/app/_service/community/useDeleteCommunityPost";

interface Props {
  communityId: number;
}

export default function DeleteCommonsModal({ communityId }: Props) {
  const router = useRouter();
  const deleteCommunistPost = useDeleteCommunityPost(communityId);
  const handleOnClick = () => {
    router.back();
  };

  const handleDeleteCommunityPost = () => {
    deleteCommunistPost.mutate();
  };

  return (
    <div className={styles.blurContainer}>
      <div className={styles.modalContainer}>
        <div className={styles.mentContainer}>
          <p>삭제된 데이터는 복구가 불가능합니다.</p>
          <p>정말로 삭제하시겠습니까 ?</p>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.activeButton} onClick={handleOnClick}>
            취소
          </button>
          <button
            className={styles.activeButton}
            onClick={handleDeleteCommunityPost}
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}
