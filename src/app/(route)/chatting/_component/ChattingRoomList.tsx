/* eslint-disable @next/next/no-img-element */
"use client";

import * as styles from "./_style/chatting.css";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { ChattingRoom } from "@/app/_types/chatting";
import NullProfileImage from "@/app/_assets/images/null-chat-profile-image.svg";

export default function ChattingRoomList({
  receiverInfo,
  lastMessage,
  id: roomId,
  unreadMessagesCount,
}: ChattingRoom) {
  const { nickname, profileUrl } = receiverInfo;
  const { content, createdAt } = lastMessage;
  const formattedDate = dayjs(createdAt).format("YYYY. MM. DD");
  const router = useRouter();

  const moveSelectChattingRoom = () => {
    router.push(`/chatting/${roomId}`);
  };

  return (
    <div className={styles.chatList} onClick={moveSelectChattingRoom}>
      <div className={styles.chatContentsContainer}>
        <div className={styles.userProfileImgContainer}>
          {profileUrl === null ?
              <NullProfileImage/>
              :
              <img
                  alt="userprofile img"
                  src={profileUrl}
                  className={styles.userProfileImg}
              />
          }
        </div>
        <div className={styles.chatInfo}>
          <div className={styles.userInfo}>
            <p className={styles.userNickName}>{nickname}</p>
            <p className={styles.chatDate}>
              {createdAt !== null ? formattedDate : ""}
            </p>
          </div>
          <div>
            {content ? (
              <p className={styles.userChatContents}>{content}</p>
            ) : (
              <p className={styles.userChatNullContents}>
                {"대화 이력이 존재하지 않습니다."}
              </p>
            )}
          </div>
          {unreadMessagesCount > 0 && (
            <p className={styles.chatCount}>{unreadMessagesCount}</p>
          )}
        </div>
      </div>
    </div>
  );
}
