/* eslint-disable @next/next/no-img-element */
"use client";

import { useGetOtherUserProfile } from "@/app/_service/profile/useGetOtherUserProfile";
import OtherUserCommunityPostList from "./OtherUserCommunityPostList";
import OtherUserDogStagramPost from "./OtherUserDogStagramPostList";
import * as styles from "./_style/otherUserProfileModal.css";
import CloseButton from "@/app/_assets/images/Xbutton.svg";
import { useRouter } from "next/navigation";
import {NULL_INPUT_IMAGE_URL} from "@/app/_const/const";
import {inputImageDefaultImg} from "@/app/_utils/DefaultImage";

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
              <img
                  src={profileUrl || NULL_INPUT_IMAGE_URL}
                  alt="dog img"
                  className={profileUrl ? styles.inputImage : styles.nullInputImage}
                  onError={inputImageDefaultImg}
              />
          </div>
        </div>

        <div className={styles.infoContainer}>
          <OtherUserCommunityPostList community={communityPostList}/>
          <OtherUserDogStagramPost dogStagram={dogStagramPostList}/>
        </div>
        <CloseButton
            className={styles.closeButton}
            onClick={handleOnCloseButtonClick}
        />
      </div>
    </div>
  );
}
