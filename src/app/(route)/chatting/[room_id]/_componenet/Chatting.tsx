// /* eslint-disable @next/next/no-img-element */
"use client";

import * as styles from "../../_component/_style/chatting.css";
import { useGetUserProfile } from "@/app/_service/profile/useGetUserProfile";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import MyChatContents from "../../_component/MyChatContents";
import OtherChatContents from "../../_component/OtherChatContents";
import InputBtnUnHover from "@/app/_assets/images/up-arrow2-unhover.svg";
import InputBtnHover from "@/app/_assets/images/up-arrow2-hover.svg";
import BackButtonLogo from "@/app/_assets/images/left-arrow2.svg";
import useWindowFocus from "use-window-focus";
import { SendMessage, ChatMessage, ChatData } from "@/app/_types/chatting";
import { Socket, io } from "socket.io-client";

type Props = {
  roomId: string;
};

const socket: Socket = io(`${process.env.NEXT_PUBLIC_SOCKET_BASE_URL}`, {
  transports: ["websocket"],
});

export default function Chatting({ roomId }: Props) {
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const [messages, setMessages] = useState<SendMessage[]>([]);
  const [input, setInput] = useState("");
  const router = useRouter();
  const { userProfile } = useGetUserProfile();
  const myUserId = userProfile?.member?.id;
  const [isHovered, setIsHovered] = useState(false);
  const [chattingHistory, setChattingHistory] = useState<ChatMessage[]>([]);
  const windowFocused = useWindowFocus();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    // 메시지 전부 읽음 처리
    if (windowFocused) {
      socket.emit("readMessage", {
        memberId: myUserId,
        chatRoomId: roomId,
      });
    }
  }, [windowFocused]);

  useEffect(() => {
    if (roomId) {
      // 메시지 전부 읽음 처리
      socket.emit("readMessage", {
        memberId: myUserId,
        chatRoomId: roomId,
      });

      socket.emit("getChat", {
        chatRoomId: roomId,
        memberId: myUserId,
      });
    }
  }, [myUserId, roomId]);

  useEffect(() => {
    if (roomId) {
      socket.on(`${roomId}-chat`, (chat: ChatData) => {
        const chatHistory = chat.chat;

        setChattingHistory(chatHistory);
      });
    }
  }, [roomId]);

  useEffect(() => {
    if (roomId) {
      socket.on(roomId, (message: SendMessage) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });
    }
  }, [roomId]);

  useEffect(() => {
    messageEndRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, chattingHistory]);

  const handleMessageSend = () => {
    if (input.trim() !== "") {
      socket.emit("sendMessage", {
        content: input,
        memberId: myUserId,
        chatRoomId: roomId,
      });

      setInput("");
    }
  };

  const handleEnterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleMessageSend();
    }
  };

  return (
    <main className={styles.container}>
      <section className={styles.chatContainer}>
        <div className={styles.header}>
          <div
            className={styles.backButton}
            onClick={() => {
              router.back();
            }}
          >
            <BackButtonLogo />
            <p>뒤로 가기</p>
          </div>
          <button className={styles.activeButton}>지원하기</button>
        </div>
        <div className={styles.contentsContainer}>
          {chattingHistory.map((data, index) => (
            <div key={index}>
              {data.sender === myUserId ? (
                <OtherChatContents message={data.content} />

              ) : (
                <MyChatContents message={data.content} />
              )}
            </div>
          ))}
          {messages.map((data, index) => (
            <div key={index}>
              {data.memberId === myUserId ? (
                <OtherChatContents key={index} message={data.content} />

              ) : (
                <MyChatContents key={index} message={data.content} />
              )}
            </div>
          ))}
          <div ref={messageEndRef}></div>
        </div>

        <div className={styles.chatInputContentsContainer}>
          <input
            className={styles.chatInputContents}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => handleEnterKeyDown(e)}
          />
          <div
            className={styles.inputBtnContainer}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleMessageSend()}
          >
            {isHovered ? <InputBtnUnHover /> : <InputBtnHover />}
          </div>
        </div>
      </section>
    </main>
  );
}
