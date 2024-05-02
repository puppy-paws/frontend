/* eslint-disable @next/next/no-img-element */
import UserProfile from "@/app/(commons)/_component/UserProfile";
import { communityPostListState } from "@/app/_store/community/atoms";
import { formatTime } from "@/app/_utils/formatTime";
import { useRecoilValue } from "recoil";
import StatusBadge from "./StatusBadge";
import * as styles from "./_style/post.css";
import { useRouter } from "next/navigation";

export default function Post() {
  const [commnityPostList] = useRecoilValue(communityPostListState);
  const router = useRouter();
  const handleOnClick = (communityId: number) => {
    router.push(`/community/${communityId}`);
  };

  const {
    id,
    pickup_location: pickupLocation,
    status,
    dog_profile_url: dogProfileUrl,
    dog_type: dogType,
    dog_character: dogCharacter, // string[]으로 바뀔 에정이라 나중에 타입 부분도 바껴야함
    description,
    created_at: createdAt,
    nickname,
    user_id: userId,
    profile_url: profileUrl,
  } = commnityPostList;

  return (
    <div onClick={() => handleOnClick(id)} className={styles.cardContainer}>
      <div className={styles.mainImageContainer}>
        <img
          src={dogProfileUrl}
          alt={`Dog Profile image ${id}`}
          className={styles.dogImage}
        />
      </div>
      <StatusBadge status={status} />
      <div className={styles.contentsContainer}>
        <p className={styles.address}>{pickupLocation}</p>
        <div className={styles.contents}>{description}</div>
        <p className={styles.dogBreed}>#{dogType}</p>
        {/* dogCharacter가 배열로 여러개 들어오면 type이랑 합쳐서 반복문으로 만들어야함 */}
        <div className={styles.cardInfo}>
          <UserProfile nickname={nickname} profileUrl={profileUrl} />
          {/* 차후에 UserProfile에 프로필 url도 넘겨줘야함 */}
          <p className={styles.date}>{formatTime(createdAt)}</p>
        </div>
      </div>
    </div>
  );
}
