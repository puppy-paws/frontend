"use client";

import ChattingRoomList from "./_component/ChattingRoomList";
import * as styles from "./_component/_style/chatting.css";
import React, { useEffect, useState } from "react";
import { useGetUserProfile } from "@/app/_service/profile/useGetUserProfile";
import { ChattingRoom } from "@/app/_types/chatting";
import { Socket, io } from "socket.io-client";

const socket: Socket = io(`${process.env.NEXT_PUBLIC_SOCKET_BASE_URL}`, {
  transports: ["websocket"],
});

export default function Page() {
  const { userProfile } = useGetUserProfile();
  const myUserId = userProfile?.member?.id;
  const [chattingRoomList, setChattingRoomList] = useState<ChattingRoom[]>([]);

  useEffect(() => {
    if (myUserId) {
      socket.emit("getRooms", {
        memberId: myUserId,
      });

      socket.on("roomList", (list: any) => {
        setChattingRoomList([...list]);
      });
    }
  }, [myUserId, userProfile]);

  return (
    <main className={styles.container}>
      <section className={styles.chatListContainer}>
        <h2 style={{marginBottom: "40px" }}>채팅</h2>
        {chattingRoomList.length > 0 ? (
            chattingRoomList.map((list, index) => (
                <ChattingRoomList
                    key={index}
                    id={list.id}
                    receiverInfo={list.receiverInfo}
                    lastMessage={list.lastMessage}
                    unreadMessagesCount={list.unreadMessagesCount}
                />
            ))
        ) : (
            <div style={{color: "darkgrey", fontWeight: "bold"}}>채팅방 목록이 비어있습니다.</div>
        )}
      </section>
    </main>
  );
}
