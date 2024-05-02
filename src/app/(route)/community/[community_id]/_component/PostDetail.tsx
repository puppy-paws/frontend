/* eslint-disable @next/next/no-img-element */
"use client";

import UserProfile from "@/app/(commons)/_component/UserProfile";
import { useGetCommnunityDetailPost } from "@/app/_service/community/useGetCommnunityDetailPost";
import { formatTime } from "@/app/_utils/formatTime";
import StatusBadge from "../../_component/StatusBadge";
import * as styles from "./_style/postDetails.css";
import DogInfoPostDetail from "./DogInfoPostDetail";
import PostDetailButtonCotainer from "./PostDetailButtonCotainer";

interface Props {
  id: number;
}

export default function PostDetails({ id }: Props) {
  const { communityDetailPost } = useGetCommnunityDetailPost(id);

  if (!communityDetailPost) return;

  const {
    status,
    created_at: createdAt,
    nickname,
    profile_url: profileUrl,
  } = communityDetailPost;

  return (
    <main className={styles.container}>
      <section className={styles.headerContainer}>
        <div className={styles.userInfoContainer}>
          <UserProfile nickname={nickname} profileUrl={profileUrl} />
          <p className={styles.createTime}>{formatTime(createdAt)}</p>
        </div>
        <div className={styles.badge}>
          <StatusBadge status={status} />
        </div>
      </section>
      <DogInfoPostDetail />
      <PostDetailButtonCotainer status={status} />
    </main>
  );
}
