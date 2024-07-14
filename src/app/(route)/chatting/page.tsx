/* eslint-disable @next/next/no-img-element */
"use client";

import Chat from "./_component/Chat";
import * as styles from "./_component/_style/chatting.css";
import BackButtonLogo from "@/app/_assets/images/left-arrow2.svg";
import MyChatContents from "./_component/myChatContents";
import OtherChatContents from "./_component/OtherChatContents";
import ChatContentsInput from "./_component/ChatContentsInput";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <main className={styles.container}>
      <section className={styles.chatListContainer}>
        <h2 style={{ paddingLeft: "40px", marginBottom: "40px" }}>채팅</h2>
        <Chat />
        <Chat />
        <Chat />
      </section>
      <section className={styles.chatContainer}>
        <div className={styles.header}>
          <div
            className={styles.other}
            onClick={() => {
              router.push("chatting/otherUserProfile/1");
            }}
          >
            <BackButtonLogo />
            <p>상대 닉네임</p>
          </div>
          <button className={styles.activeButton}>지원하기</button>
        </div>
        <div className={styles.contentsContainer}>
          <div className={styles.contentsDate}>2024년 3월 26일 금요일</div>
          <MyChatContents />
          <OtherChatContents />
        </div>
        <ChatContentsInput />
      </section>
    </main>
  );
}
