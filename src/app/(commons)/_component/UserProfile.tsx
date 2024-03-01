"use client";

import { useRouter } from "next/navigation";
import * as styles from "./_style/userProfile.css";

export default function UserProfile() {
  const router = useRouter();

  const onClick = () => {
    router.push(`/messages`);
  };
  return (
    <div className={styles.userInfo} onClick={onClick}>
      <img
        width={30}
        height={30}
        alt="userprofile img"
        src="https://images.dog.ceo//breeds//retriever-chesapeake//n02099849_3007.jpg"
        className={styles.userProfileImg}
      />
      김지우
    </div>
  );
}
