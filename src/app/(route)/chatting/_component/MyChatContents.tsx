import * as styles from "./_style/chatting.css";

export default function MyChatContents() {
  return (
    <div className={styles.myChatContentsContainer}>
      <div className={styles.userProfileImgContentsContainer}>
        <img
          alt="userprofile img"
          src="https://images.dog.ceo//breeds//retriever-chesapeake//n02099849_3007.jpg"
          className={styles.userProfileImg}
        />
      </div>
      <div className={styles.myChatContents}>
        앗 네 안녕하세요! 메세지 감사합니다! 지역도 같다니 아주 좋은데욥?? 제가
        지금은 근무중이라 이따가 저녁에 다시 연락드려도 괜찮을까요?
      </div>
    </div>
  );
}
