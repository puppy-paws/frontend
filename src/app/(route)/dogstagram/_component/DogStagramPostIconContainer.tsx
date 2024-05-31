import { useEffect, useState } from "react";
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
import { QUERY_KEYS } from "@/app/_const/queryKey";
import { useGetUserProfile } from "@/app/_service/profile/useGetUserProfile";
import { ProfileAllInfo } from "@/app/_types/profile";
import { useQueryClient } from "@tanstack/react-query";

export default function DogStagramPostIconContainer({
  type,
  idx,
}: DogStagramPostTypeProps) {
  const queryClient = useQueryClient();
  const dogStagramPostData =
    type === "starDog" ? starDogStagramPostListState : dogStagramPostListState;
  const dogStagramPostList = useRecoilValue(dogStagramPostData)[idx];
  const { user_id: userId } = dogStagramPostList;
  const [myId, setMyId] = useState(-1);
  const isMyself = myId === +userId ? true : false;
  const [selectHeart, setSelectHeart] = useState(true);
  const [showManageBtn, setShowManageBtn] = useState(false);
  const dogStagramPostId = dogStagramPostList.id;

  const userProfile = useGetUserProfile();
  const getUserProfileInfo = queryClient.getQueryData<ProfileAllInfo>([
    QUERY_KEYS.GET_USER_PROFILE,
  ]);

  useEffect(() => {
    const profileData =
      getUserProfileInfo?.member || userProfile.userProfile?.member;

    if (profileData) {
      setMyId(profileData.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getUserProfileInfo]);

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

        {isMyself && (
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
