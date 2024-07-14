/* eslint-disable @next/next/no-img-element */
"use client";

import * as styles from "./_style/otherUserProfileModal.css";
import UpArrow from "@/app/_assets/images/up-arrow.svg";
import DownArrow from "@/app/_assets/images/down-arrow.svg";
import { useState } from "react";
import { CommunityPostList } from "@/app/_types/profile";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";

interface Props {
  community: CommunityPostList[] | undefined;
}

export default function OtherUserReviewList({ community }: Props) {
  const router = useRouter();
  const [showCommunityPost, setShowCommunityPost] = useState(false);
  if (community === undefined) return null;

  const formattedPickupDates = community.map((item) => {
    return dayjs(item.pickupDate).format("YYYY년 MM월 DD일");
  });

  const handleMoveMyCommunityPost = (communityId: number) => {
    router.push(`/community/${communityId}`);
  };

  return (
    <>
      <div className={styles.otherUserPostContainer}>
        <h4>커뮤니티</h4>
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
        <div className={styles.otherUserCommunityPostContainer}>
          {community?.map((value, idx) => (
            <p
              onClick={() => {
                handleMoveMyCommunityPost(value.id);
              }}
              key={idx}
              className={styles.otherUserCommunityPost}
            >
              {formattedPickupDates[idx]} 픽업 | {value.pickupLocation}
            </p>
          ))}
        </div>
      )}
    </>
  );
}
