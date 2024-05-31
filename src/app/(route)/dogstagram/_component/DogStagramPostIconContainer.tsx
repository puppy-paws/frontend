import { useState } from "react";
import * as styles from "./_style/dogStagramPost.css";
import Heart from "@/app/_assets/images/heartIcon.svg";
import HeartSelected from "@/app/_assets/images/heartIcon-selected.svg";
import { useRecoilValue } from "recoil";
import {
  dogStagramPostListState,
  starDogStagramPostListState,
} from "@/app/_store/dogstagram/atoms";
import { DogStagramPostTypeProps } from "@/app/_types/dogStagram";
import MenuIcon from "@/app/_assets/images/menu-icon.svg";
import DogStagramManageBtn from "./DogStagramManageBtn";
import { useIsMySelfPost } from "@/app/_hooks/useIsMySelfPost";

export default function DogStagramPostIconContainer({
  type,
  idx,
}: DogStagramPostTypeProps) {
  const [selectHeart, setSelectHeart] = useState(true);
  const [showManageBtn, setShowManageBtn] = useState(false);
  const dogStagramPostData =
    type === "starDog" ? starDogStagramPostListState : dogStagramPostListState;
  const dogStagramPostList = useRecoilValue(dogStagramPostData)[idx];
  const dogStagramPostId = dogStagramPostList.id;
  const { user_id: userId } = dogStagramPostList;
  const isMyself = useIsMySelfPost(userId);

  if (!dogStagramPostList) {
    return null;
  }

  const {
    is_liked: isLiked,
    total_like: totalLike,
    last_liked_nickname: lastLikedNickname,
  } = dogStagramPostList;

  const handleHeartClick = () => {
    setSelectHeart(!selectHeart);
  };

  const handleMenuIconClick = () => {
    setShowManageBtn(!showManageBtn);
  };

  return (
    <div className={styles.likeContainer}>
      <p className={styles.likeCount}>
        {totalLike > 1
          ? `${lastLikedNickname}님 외 ${totalLike}명이 좋아합니다.`
          : `${totalLike}명이 좋아합니다.`}
      </p>
      <div className={styles.iconContainer}>
        {selectHeart ? (
          <Heart className={styles.heartIcon} onClick={handleHeartClick} />
        ) : (
          <HeartSelected
            className={styles.heartIcon}
            onClick={handleHeartClick}
          />
        )}

        {isMyself === true && (
          <>
            <MenuIcon
              className={styles.menuIcon}
              onClick={handleMenuIconClick}
            />
            {showManageBtn && (
              <DogStagramManageBtn dogStagramPostId={dogStagramPostId} />
            )}
          </>
        )}
      </div>
    </div>
  );
}
