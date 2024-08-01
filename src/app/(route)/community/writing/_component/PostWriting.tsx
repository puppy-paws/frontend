/* eslint-disable @next/next/no-img-element */
"use client";

import * as styles from "@/app/(commons)/post/_component/_style/postCommons.css";
import Calender from "@/app/(commons)/post/_component/Calender";
import InputContainer from "@/app/(commons)/post/_component/InputContainer";
import IntroductionTextArea from "@/app/(commons)/post/_component/IntroductionTextArea";
import LocationSelectBox from "@/app/(commons)/post/_component/LocationSelectBox";
import ButtonContainer from "./ButtonContainer";
import { useGetUserProfile } from "@/app/_service/profile/useGetUserProfile";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/app/_const/queryKey";
import { ProfileAllInfo } from "@/app/_types/profile";
import { useState, useEffect } from "react";
import { PostWritingInfo } from "@/app/_types/community";
import { useCreateCommunityPost } from "@/app/_service/community/useCreateCommunityPost";
import NullInputImage from "@/app/_assets/images/input-image.svg";

export default function PostWriting() {
  const createCommnityPost = useCreateCommunityPost();
  const [postWritingInfo, setPostWritingInfo] = useState<PostWritingInfo>({
    description: "",
    pickup_location: "",
    pickup_date: undefined,
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
        dogType: profileData.dogType || "",
        dogName: profileData.dogName || "",
        dogProfileUrl: profileData.dogProfileUrl || "",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getUserProfileInfo]);

  const { dogType, dogName, dogProfileUrl } = dogProfile;

  const handleCreateCommunityPost = () => {
    createCommnityPost.mutate(postWritingInfo);
  };
  console.log(dogProfileUrl);
  return (
    <main className={styles.container}>
      <section>
        <h2 style={{ textAlign: "center" }}>게시물 등록</h2>

        {dogProfileUrl === null || dogProfileUrl === "" ? (
          <div className={styles.inputImage}>
            <NullInputImage />
          </div>
        ) : (
          <img
            key={dogProfileUrl}
            src={dogProfileUrl}
            alt="my dog img"
            className={styles.inputImage}
          />
        )}
      </section>
      <section className={styles.contentsContainer}>
        <InputContainer labelText="이름">{dogName}</InputContainer>
        <InputContainer labelText="견종">{dogType}</InputContainer>
        <InputContainer labelText="위치" renderNonActiveInput={false}>
          <LocationSelectBox setPostWritingInfo={setPostWritingInfo} />
        </InputContainer>
        <InputContainer labelText="날짜" renderNonActiveInput={false}>
          <Calender setPostWritingInfo={setPostWritingInfo} />
        </InputContainer>
        <IntroductionTextArea setPostWritingInfo={setPostWritingInfo} />
        <ButtonContainer handler={handleCreateCommunityPost} />
      </section>
    </main>
  );
}
