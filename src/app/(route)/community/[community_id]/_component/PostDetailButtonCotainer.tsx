"use client";

import * as styles from "./_style/postDetails.css";
import { useRouter } from "next/navigation";
import BackButton from "@/app/(commons)/post/_component/BackButton";
import { QUERY_KEYS } from "@/app/_const/queryKey";
import { useGetUserProfile } from "@/app/_service/profile/useGetUserProfile";
import { ProfileAllInfo } from "@/app/_types/profile";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { communityDetailPostState } from "@/app/_store/community/atoms";
import { useRecoilValue } from "recoil";

interface props {
  status: "Y" | "N";
  communityId: number;
}

export default function PostDetailButtonCotainer({
  status,
  communityId,
}: props) {
  const communityDetailPost = useRecoilValue(communityDetailPostState);
  const { user_id: userId } = communityDetailPost;
  const [myId, setMyId] = useState(0);
  const isMyself = myId === +userId ? true : false;
  const queryClient = useQueryClient();
  const userProfile = useGetUserProfile();
  const getUserProfileInfo = queryClient.getQueryData<ProfileAllInfo>([
    QUERY_KEYS.GET_USER_PROFILE,
  ]);

  const router = useRouter();

  const handleOnClick = (url: string) => {
    router.push(`${communityId}/${url}`);
  };

  useEffect(() => {
    const profileData =
      getUserProfileInfo?.member || userProfile.userProfile?.member;

    if (profileData) {
      setMyId(profileData.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getUserProfileInfo]);

  return (
    <section className={styles.buttonContainer}>
      {isMyself ? (
        <>
          <button
            onClick={() => handleOnClick("delete")}
            className={styles.activeButton}
          >
            삭제
          </button>
          <button
            onClick={() => handleOnClick("edit")}
            className={styles.activeButton}
          >
            수정
          </button>
        </>
      ) : status === "Y" ? (
        <button className={styles.jobCompletionButton}>구인완료</button>
      ) : (
        <button className={styles.activeButton}>신청</button>
      )}

      <BackButton type={"box"} />
    </section>
  );
}
