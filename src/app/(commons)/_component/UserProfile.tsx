/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";
import * as styles from "./_style/userProfile.css";
import {NULL_PROFILE_IMAGE_URL} from "@/app/_const/const";
import {userProfileDefaultImg} from "@/app/_utils/DefaultImage";

interface props {
  nickname: string;
  profileUrl: string | null | undefined;
  userId: string;
}

export default function UserProfile({ nickname, profileUrl, userId }: props) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/chatting/otherUserProfile/${userId}`);
  };

  return (
    <div className={styles.userInfo} onClick={onClick}>
        <img
          width={30}
          height={30}
          alt="userprofile img"
          src={profileUrl || NULL_PROFILE_IMAGE_URL}
          className={styles.userProfileImg}
          onError={userProfileDefaultImg}
        />
      {nickname}
    </div>
  );
}
