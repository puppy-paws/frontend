import * as styles from "./_style/chatting.css";
import { NULL_CHAT_PROFILE_IMAGE_URL } from "@/app/_const/const";
import { chatProfileDefaultImg } from "@/app/_utils/DefaultImage";

type Props = {
  message: string;
  profileImgUrl: string | null | undefined;
};

export default function MyChatContents({ message, profileImgUrl }: Props) {
  return (
    <div className={styles.myChatContentsContainer}>
      <div className={styles.userProfileImgContentsContainer}>
        <img
          alt="my profile img"
          src={profileImgUrl || NULL_CHAT_PROFILE_IMAGE_URL}
          className={styles.userProfileImg}
          onError={chatProfileDefaultImg}
        />
      </div>
      <div className={styles.myChatContents}>{message}</div>
    </div>
  );
}
