import * as styles from "./_style/chatting.css";

type Props = {
  message: string;
};

export default function MyChatContents({ message }: Props) {
  return (
    <div className={styles.myChatContentsContainer}>
      <div className={styles.userProfileImgContentsContainer}>
        <img
          alt="userprofile img"
          src="https://images.dog.ceo//breeds//retriever-chesapeake//n02099849_3007.jpg"
          className={styles.userProfileImg}
        />
      </div>
      <div className={styles.myChatContents}>{message}</div>
    </div>
  );
}
