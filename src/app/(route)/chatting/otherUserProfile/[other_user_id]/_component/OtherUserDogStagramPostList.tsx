/* eslint-disable @next/next/no-img-element */
"use client";

import * as styles from "./_style/otherUserProfileModal.css";
import UpArrow from "@/app/_assets/images/up-arrow.svg";
import DownArrow from "@/app/_assets/images/down-arrow.svg";
import { useState } from "react";
import { DogStagramPostList } from "@/app/_types/profile";
import { useRouter } from "next/navigation";

interface OtherUserDtagramPostProps {
  dogStagram?: DogStagramPostList[];
}

export default function OtherUserDogStagramPost({
  dogStagram,
}: OtherUserDtagramPostProps) {
  const router = useRouter();
  const [showDogStagramPost, setShowDogStagramPost] = useState(false);

  if (dogStagram === undefined) return null;

  const handleMoveOtherUserDogStagramPost = () => {
    router.push(`/dogstagram`);
  };

  return (
    <>
      <div className={styles.otherUserPostContainer}>
        <h4>견스타그램</h4>
        <p>
          {dogStagram.length}개
          {showDogStagramPost ? (
            <UpArrow
              onClick={() => setShowDogStagramPost(!showDogStagramPost)}
              className={styles.arrowIcon}
            />
          ) : (
            <DownArrow
              onClick={() => setShowDogStagramPost(!showDogStagramPost)}
              className={styles.arrowIcon}
            />
          )}
        </p>
      </div>
      {showDogStagramPost && (
        <div className={styles.otherUserDogStagramPostContainer}>
          {dogStagram?.map((value, idx) => (
            <img
              key={idx}
              src={value.image_url}
              className={styles.otherUserDogStagramPost}
              alt={`dog${idx}`}
              onClick={handleMoveOtherUserDogStagramPost}
            />
          ))}
        </div>
      )}
    </>
  );
}
