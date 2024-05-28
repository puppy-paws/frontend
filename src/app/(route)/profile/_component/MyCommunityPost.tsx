/* eslint-disable @next/next/no-img-element */
"use client";

import * as styles from "./_style/profile.css";
import UpArrow from "@/app/_assets/images/up-arrow.svg";
import DownArrow from "@/app/_assets/images/down-arrow.svg";
import { useState } from "react";
import { CommunityPostList } from "@/app/_types/profile";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

interface MyCommunityPostProps {
  community: CommunityPostList[];
}

export default function MyCommunutyPost({ community }: MyCommunityPostProps) {
  const router = useRouter();
  const [showCommunityPost, setShowCommunityPost] = useState(false);

  const formattedPickupDates = community.map((item) => {
    return dayjs(item.pickupDate).format("YYYY년 MM월 DD일");
  });

  const handleMoveMyCommunityPost = (communityId: number) => {
    router.push(`community/${communityId}`);
  };

  return (
    <>
      <div className={styles.myPostContainer}>
        <h5>커뮤니티</h5>
        <p>
          {community.length}개
          {showCommunityPost ? (
            <UpArrow
              onClick={() => setShowCommunityPost(!showCommunityPost)}
              className={styles.arrowIcon}
            />
          ) : (
            <DownArrow
              onClick={() => setShowCommunityPost(!showCommunityPost)}
              className={styles.arrowIcon}
            />
          )}
        </p>
      </div>
      {showCommunityPost && (
        <div className={styles.myCommunityPostContainer}>
          {community?.map((value, idx) => (
            <p
              onClick={() => {
                handleMoveMyCommunityPost(value.id);
              }}
              key={idx}
              className={styles.myCommunityPost}
            >
              {formattedPickupDates[idx]} 픽업 | {value.pickupLocation}
            </p>
          ))}
        </div>
      )}
    </>
  );
}
