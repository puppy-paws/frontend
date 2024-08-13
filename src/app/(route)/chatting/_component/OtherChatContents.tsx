import * as styles from "./_style/chatting.css";

type Props = {
  message: string;
};

export default function OtherChatContents({ message }: Props) {
  return (
    <div className={styles.otherChatContentsContainer}>
      <div className={styles.userProfileImgContentsContainer}>
        <img
          alt="userprofile img"
          src="https://images.dog.ceo//breeds//retriever-chesapeake//n02099849_3007.jpg"
          className={styles.userProfileImg}
        />
      </div>
      <div className={styles.otherChatContents}>{message}</div>
    </div>
  );
}
