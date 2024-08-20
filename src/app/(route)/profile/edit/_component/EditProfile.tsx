"use client";

import { useState } from "react";
import * as styles from "./_style/editProfile.css";
import { useForm } from "react-hook-form";
import { regexPatterns } from "@/app/_const/regex";
import { InputField } from "../../_component/InputValueValid";
import {
  EditDogProfile as EditDogProfileType,
  EditUserProfile,
} from "@/app/_types/profile";
import { useUploadedImages } from "@/app/_hooks/useUploadedFiles";
import InputImage from "@/app/(commons)/_component/InputImage";
import {
  useEditUserProfile,
  useEditUserProfileImage,
} from "@/app/_service/profile/useEditUserProfile";
import ReadOnlyInput from "../../_component/ReadOnlyInput";
import { useGetUserProfile } from "@/app/_service/profile/useGetUserProfile";
import EditDogProfile from "./EditDogProfile";
import {
  useEditDogProfile,
  useEditDogProfileImage,
} from "@/app/_service/profile/useEditDogProfile";

export default function EditProfile() {
  const [isduplication, setIsduplication] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showPuppyInfo, setShowPuppyInfo] = useState(false);
  const [uploadedImages, updateUploadedImages] = useUploadedImages();
  const [isValidDogProfile, setIsValidDogProfile] = useState(false);
  const [isUserProfileDelete, setIsUserProfileDelete] = useState(false);
  const [isDogProfileDelete, setIsDogProfileDelete] = useState(false);
  const editUserProfileMutation = useEditUserProfile();
  const editDogProfileMutation = useEditDogProfile();
  const editUserProfileImageMutation = useEditUserProfileImage();
  const editDogProfileImageMutation = useEditDogProfileImage();

  const editUserProfileformData = new FormData();
  const editDogProfileformData = new FormData();
  const editUserProfileImageformData = new FormData();
  const editDogProfileImageformData = new FormData();

  const userProfile = useGetUserProfile();
  const {
    email,
    nickname,
    dogType,
    dogName,
    dogCharacters,
    dogProfileUrl,
    profileUrl,
  } = userProfile.userProfile?.member || {};

  const dogProfile = {
    dogType: dogType,
    dogName: dogName,
    dogCharacters: dogCharacters,
    dogProfileUrl: dogProfileUrl,
  };

  const [dogProfileInfo, setDogProfileInfo] = useState<EditDogProfileType>({
    dogType: dogType || "",
    dogName: dogName || "",
    dogCharacters: dogCharacters || [],
    dogProfileUrl: dogProfileUrl,
  });

  const isDogProfile = dogName ? true : false;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<EditUserProfile>({
    criteriaMode: "all",
    mode: "onChange",
    defaultValues: {
      nickname: nickname,
    },
  });

  const onSubmit = async (data: any) => {
    try {
      let isDogProfileUpload = typeof dogProfileInfo.dogProfileUrl === "object";
      let isUserProfileUpload = uploadedImages[0];

      dogProfileInfo.dogProfileUrl &&
        editDogProfileImageformData.append(
          "image",
          dogProfileInfo.dogProfileUrl
        );

      uploadedImages[0] &&
        editUserProfileImageformData.append("image", uploadedImages[0]);

      await editUserProfileMutation.mutateAsync(data.nickname);
      await editDogProfileMutation.mutateAsync(dogProfileInfo);

      if (
        isUserProfileUpload ||
        (!isUserProfileUpload && isUserProfileDelete)
      ) {
        await editUserProfileImageMutation.mutateAsync(
          editUserProfileImageformData
        );
      }

      if (isDogProfileUpload || (!isDogProfileUpload && isDogProfileDelete)) {
        await editDogProfileImageMutation.mutateAsync(
          editDogProfileImageformData
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
        }
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <main className={styles.container}>
        <section>
          <h2 style={{ textAlign: "center" }}>내 프로필 수정</h2>
          <div style={{ width: "100%" }}>
            <InputImage
              key={profileUrl}
              imgUrl={profileUrl}
              updateUploadedFile={updateUploadedImages}
              setIsDelete={setIsUserProfileDelete}
            />
          </div>
        </section>
        <section className={styles.contentsContainer}>
          <div>
            <div className={styles.titleContainer}>
              <h3>닉네임</h3>
              {showMessage && (
                <span
                  className={
                    isduplication ? styles.informationMent : styles.warningMent
                  }
                >
                  {isduplication
                    ? "사용 가능한 닉네임입니다."
                    : "이미 존재하는 닉네임 입니다."}
                </span>
              )}
            </div>
            <InputField
              label=""
              placeholder="닉네임을 입력하세요."
              value={watch("nickname") || nickname || ""}
              error={errors.nickname?.message}
              register={register("nickname", {
                pattern: {
                  value: regexPatterns["nickname"],
                  message:
                    "닉네임은 한글, 영문, 숫자 1~8자리로 이루어져야 합니다.",
                },
              })}
            />
          </div>

          <div>
            <h3 style={{ marginBottom: "18px" }}>이메일</h3>
            <ReadOnlyInput>{email}</ReadOnlyInput>
          </div>
        </section>

        <button
          type="button"
          className={styles.addDogProfileButton}
          onClick={() => setShowPuppyInfo(true)}
          style={{ display: isDogProfile || showPuppyInfo ? "none" : "block" }}
        >
          +반려견 정보 추가
        </button>

        {(isDogProfile || showPuppyInfo) && (
          <EditDogProfile
            dogProfile={dogProfile as unknown as EditDogProfileType}
            setDogProfile={setDogProfileInfo}
            setShowPuppyInfo={setShowPuppyInfo}
            setIsValidDogProfile={setIsValidDogProfile}
            setIsDogProfileDelete={setIsDogProfileDelete}
          />
        )}

        <button
          type="submit"
          className={
            uploadedImages[0] || (isValid && isValidDogProfile)
              ? styles.activeButton
              : styles.nonActiveButton
          }
          disabled={!isValid && !isValidDogProfile}
        >
          완료
        </button>
      </main>
    </form>
  );
}
