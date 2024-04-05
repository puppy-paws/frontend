import * as styles from "./_style/chatting.css";

export default function OtherChatContents() {
  return (
    <div className={styles.otherChatContentsContainer}>
      <div className={styles.userProfileImgContentsContainer}>
        <img
          alt="userprofile img"
          src="https://images.dog.ceo//breeds//retriever-chesapeake//n02099849_3007.jpg"
          className={styles.userProfileImg}
        />
      </div>
      <div className={styles.otherChatContents}>
        안녕하세요! 커뮤니티 게시판에서 글 보고 연락드립니다! 전 반려견 셋을
        키우고 있고 셋 다 대형견이었어서 큰 애기들 산책은 아주 자신있습니다!
        지역도 서초구라 아주 가까워서 원하시는 픽업 시간에 픽업 가능할 것 같아서
        연락드립니다! 그럼 괜찮으시면 답변 주세요!!
      </div>
    </div>
  );
}
