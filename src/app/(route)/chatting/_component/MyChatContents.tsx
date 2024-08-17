import * as styles from "./_style/chatting.css";
import NullProfileImage from "@/app/_assets/images/null-chat-profile-image.svg";

type Props = {
  message: string;
  profileImgUrl: string;
};

export default function MyChatContents({ message, profileImgUrl }: Props) {
  return (
    <div className={styles.myChatContentsContainer}>
      <div className={styles.userProfileImgContentsContainer}>
          {profileImgUrl === null ?
              <NullProfileImage/>
              :
            <img
              alt="userprofile img"
              src={profileImgUrl}
              className={styles.userProfileImg}
            />
          }
      </div>
        <div className={styles.myChatContents}>{message}</div>
    </div>
  );
}
