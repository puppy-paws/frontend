"use client";

import * as styles from "@/app/(commons)/post/_component/_style/postCommons.css";
import Calender from "@/app/(commons)/post/_component/Calender";
import InputContainer from "@/app/(commons)/post/_component/InputContainer";
import IntroductionTextArea from "@/app/(commons)/post/_component/IntroductionTextArea";
import LocationSelectBox from "@/app/(commons)/post/_component/LocationSelectBox";
import ButtonContainer from "./ButtonContainer";
import { QUERY_KEYS } from "@/app/_const/queryKey";
import { useGetUserProfile } from "@/app/_service/profile/useGetUserProfile";
import { PostEditingInfo } from "@/app/_types/community";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { ProfileAllInfo } from "@/app/_types/profile";
import { useEditCommunityPost } from "@/app/_service/community/useEditCommunityPost";
import { useRecoilValue } from "recoil";
import { communityDetailPostState } from "@/app/_store/community/atoms";
import { imageContainer } from "@/app/(commons)/post/_component/_style/postCommons.css";
import { NULL_INPUT_IMAGE_URL } from "@/app/_const/const";
import { inputImageDefaultImg } from "@/app/_utils/DefaultImage";

interface Props {
  communityId: number;
}

export default function PostEdit({ communityId }: Props) {
  const communityDetailPost = useRecoilValue(communityDetailPostState);
  const {
    pickup_date: pickUpDate,
    pickup_location: pickUpLocation,
    description,
  } = communityDetailPost;
  const editCommnityPost = useEditCommunityPost(communityId);
  const [putEditingInfo, setPutEditingInfo] = useState<PostEditingInfo>({
    description: description,
    pickup_location: pickUpLocation,
    pickup_date: pickUpDate,
  });

  const queryClient = useQueryClient();
  const userProfile = useGetUserProfile();
  const getUserProfileInfo = queryClient.getQueryData<ProfileAllInfo>([
    QUERY_KEYS.GET_USER_PROFILE,
  ]);

  const [dogProfile, setDogProfile] = useState({
    dogType: "",
    dogName: "",
    dogProfileUrl: "",
  });

  useEffect(() => {
    const profileData =
      getUserProfileInfo?.member || userProfile.userProfile?.member;

    if (profileData) {
      setDogProfile({
        dogType: profileData.dogType,
        dogName: profileData.dogName,
        dogProfileUrl: profileData.dogProfileUrl,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getUserProfileInfo]);

  const { dogType, dogName, dogProfileUrl } = dogProfile;
  const handleEditCommunityPost = async () => {
    editCommnityPost.mutate(putEditingInfo);
  };

  return (
    <main className={styles.container}>
      <section>
        <h2 style={{textAlign: "center"}}>게시물 수정</h2>
        <div className={imageContainer}>
          <img
              key={dogProfileUrl}
              src={dogProfileUrl || NULL_INPUT_IMAGE_URL}
              alt="my dog img"
              className={dogProfileUrl ? styles.inputImage : styles.nullInputImage}
              onError={inputImageDefaultImg}
          />
        </div>
      </section>
      <section className={styles.contentsContainer}>
        <InputContainer labelText="이름">{dogName}</InputContainer>
        <InputContainer labelText="견종">{dogType}</InputContainer>
        <InputContainer labelText="위치" renderNonActiveInput={false}>
          <LocationSelectBox
              locationValue={pickUpLocation}
            setPostWritingInfo={setPutEditingInfo}
          />
        </InputContainer>
        <InputContainer labelText="날짜" renderNonActiveInput={false}>
          <Calender
            dateValue={pickUpDate}
            setPostWritingInfo={setPutEditingInfo}
          />
        </InputContainer>
        <IntroductionTextArea
          description={description}
          setPostWritingInfo={setPutEditingInfo}
        />
        <ButtonContainer handler={handleEditCommunityPost} />
      </section>
    </main>
  );
}
