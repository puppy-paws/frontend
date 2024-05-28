/* eslint-disable @next/next/no-img-element */
"use client";

import * as styles from "./_style/profile.css";
import UpArrow from "@/app/_assets/images/up-arrow.svg";
import DownArrow from "@/app/_assets/images/down-arrow.svg";
import { useState } from "react";
import { DogStagramPostList } from "@/app/_types/profile";
import { useRouter } from "next/navigation";

interface MyDogStagramPostProps {
  dogStagram: DogStagramPostList[];
}

export default function MyDogStagramPost({
  dogStagram,
}: MyDogStagramPostProps) {
  const router = useRouter();
  const [showDogStagramPost, setShowDogStagramPost] = useState(false);

  const handleMoveMyDogStagramPost = () => {
    router.push(`dogstagram`);
  };

  return (
    <>
      <div className={styles.myPostContainer}>
        <h5>견스타그램</h5>
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
        <div className={styles.myDogStagramPostContainer}>
          {dogStagram?.map((value, idx) => (
            <img
              key={idx}
              src={value.image_url}
              className={styles.myDogStagramPost}
              alt={`dog${idx}`}
              onClick={handleMoveMyDogStagramPost}
            />
          ))}
        </div>
      )}
    </>
  );
}
