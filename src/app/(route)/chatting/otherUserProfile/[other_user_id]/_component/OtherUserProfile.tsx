/* eslint-disable @next/next/no-img-element */
"use client";

import { useGetOtherUserProfile } from "@/app/_service/profile/useGetOtherUserProfile";
import OtherUserCommunityPostList from "./OtherUserCommunityPostList";
import OtherUserDogStagramPost from "./OtherUserDogStagramPostList";
import NullImage from "@/app/_assets/images/input-image.svg";
import * as styles from "./_style/otherUserProfileModal.css";
import CloseButton from "@/app/_assets/images/Xbutton.svg";
import { useRouter } from "next/navigation";

type Props = {
  otherUserId: number;
};

export default function OtherUserProfile({ otherUserId }: Props) {
  const router = useRouter();
  const otherUserProfile = useGetOtherUserProfile(otherUserId);
  const { nickname, profileUrl } =
    otherUserProfile.otherUserProfile?.member || {};
  const communityPostList = otherUserProfile.otherUserProfile?.communities;
  const dogStagramPostList = otherUserProfile.otherUserProfile?.dogstagrams;

  const handleOnCloseButtonClick = () => {
    router.back();
  };

  return (
    <div className={styles.blurContainer}>
      <div className={styles.modalContainer}>
        <div className={styles.profileInfoContainer}>
          <h2 className={styles.nickName}>{nickname}</h2>
          <div className={styles.inputImageContainer}>
            {profileUrl ? (
              <img
                src={profileUrl}
                alt="upload img"
                className={styles.inputImage}
              />
            ) : (
              <div className={styles.inputImage}>
                <NullImage />
              </div>
            )}
          </div>
        </div>

        <div className={styles.infoContainer}>
          <OtherUserCommunityPostList community={communityPostList} />
          <OtherUserDogStagramPost dogStagram={dogStagramPostList} />
        </div>
        <CloseButton
          className={styles.closeButton}
          onClick={handleOnCloseButtonClick}
        />
      </div>
    </div>
  );
}
