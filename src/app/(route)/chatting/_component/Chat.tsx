/* eslint-disable @next/next/no-img-element */

import * as styles from "./_style/chatting.css";

export default function Chat() {
  return (
    <div className={styles.chatList}>
      <div className={styles.chatContentsContainer}>
        <div className={styles.userProfileImgContainer}>
          <img
            alt="userprofile img"
            src="https://images.dog.ceo//breeds//retriever-chesapeake//n02099849_3007.jpg"
            className={styles.userProfileImg}
          />
        </div>
        <div className={styles.chatInfo}>
          <div className={styles.userInfo}>
            <p className={styles.userNickName}>kjw6473</p>
            <p className={styles.chatDate}>2024.04.20</p>
          </div>
          <div>
            <p className={styles.userChatContents}>안녕하세요.</p>
          </div>
          {/* 새로운 채팅이 있을 때만 */}
          {/* <p className={styles.chatCount}>1</p> */}
        </div>
      </div>
    </div>
  );
}
