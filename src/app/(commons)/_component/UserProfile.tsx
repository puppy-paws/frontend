/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";
import * as styles from "./_style/userProfile.css";

interface props {
  nickname: string;
  profileUrl: string;
}

export default function UserProfile({ nickname, profileUrl }: props) {
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
        src={profileUrl}
        className={styles.userProfileImg}
      />
      {nickname}
    </div>
  );
}
