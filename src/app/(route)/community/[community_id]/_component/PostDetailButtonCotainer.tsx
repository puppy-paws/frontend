"use client";

import * as styles from "./_style/postDetails.css";
import { useRouter } from "next/navigation";
import BackButton from "@/app/(commons)/post/_component/BackButton";
import { communityDetailPostState } from "@/app/_store/community/atoms";
import { useRecoilValue } from "recoil";
import { useIsMySelfPost } from "@/app/_hooks/useIsMySelfPost";
import { useGetUserProfile } from "@/app/_service/profile/useGetUserProfile";
import { Socket, io } from "socket.io-client";
import cookie from "@/app/_utils/cookie";
import {ACCESS_TOKEN} from "@/app/_const/const";

interface props {
  status: "Y" | "N";
  communityId: number;
}

const socket: Socket = io(`${process.env.NEXT_PUBLIC_SOCKET_BASE_URL}`, {
  transports: ["websocket"],
});

export default function PostDetailButtonCotainer({
  status,
  communityId,
}: props) {
  const router = useRouter();
  const communityDetailPost = useRecoilValue(communityDetailPostState);
  const { user_id: otherUserId } = communityDetailPost;
  const { userProfile } = useGetUserProfile();
  const myUserId = userProfile?.member?.id;
  const isMyself = useIsMySelfPost(otherUserId);
  const isAccessToken = cookie.get(ACCESS_TOKEN);

  const handleOnClick = (url: string) => {
    router.push(`${communityId}/${url}`);
  };

  const onClickStartChatting = () => {
    if (myUserId) {
      socket.emit("createRoom", {
        sender: myUserId,
        receiver: otherUserId,
      });

      socket.on("roomCreated", (roomNumber) => {
        router.push(`/chatting?roomNumber=${roomNumber}`);
      });
    }
  };

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
            isAccessToken && (
                <button className={styles.activeButton} onClick={onClickStartChatting}>
                  신청
                </button>)
        )}
        <BackButton type={"box"}/>
      </section>
  );
}