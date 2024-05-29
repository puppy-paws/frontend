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
import { useEditUserProfile } from "@/app/_service/profile/useEditUserProfile";
import ReadOnlyInput from "../../_component/ReadOnlyInput";
import { useGetUserProfile } from "@/app/_service/profile/useGetUserProfile";
import EditDogProfile from "./EditDogProfile";
import { useEditDogProfile } from "@/app/_service/profile/useEditDogProfile";

// to do list
// 새로 고침시에 이미지가 빈 이미지로 들어감
// 해결방법
// 1. useEffect나 뭐 해가지고 초반 url이나 변경 이후 url을 스토리지에 관리하는 방법
// 차후 적용 예정

export default function EditProfile() {
  const [isduplication, setIsduplication] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showPuppyInfo, setShowPuppyInfo] = useState(true);
  const [uploadedImages, updateUploadedImages] = useUploadedImages();
  const editUserProfileMutation = useEditUserProfile();
  const editDogProfileMutation = useEditDogProfile();

  const EditUserProfileformData = new FormData();
  const EditDogProfileformData = new FormData();

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
    dogProfileUrl: dogProfileUrl || "",
  });

  const isDogProfile = dogName ? true : false;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<EditUserProfile>({
    criteriaMode: "all",
    mode: "onChange",
    defaultValues: {
      nickname: nickname,
    },
  });

  const isFormValid = Object.values(watch()).every(
    (value) => value !== "" && !Object.keys(errors).length
  );

  const onSubmit = async (data: any) => {
    try {
      EditUserProfileformData.append("nickname", data.nickname);
      EditDogProfileformData.append("dog_name", dogProfileInfo.dogName || "");
      EditDogProfileformData.append("dog_type", dogProfileInfo.dogType || "");
      EditDogProfileformData.append(
        "dog_character",
        dogProfileInfo.dogCharacters![0]
      );
      EditDogProfileformData.append(
        "dog_character2",
        dogProfileInfo.dogCharacters![1]
      );
      EditDogProfileformData.append(
        "dog_profile_image",
        dogProfileInfo.dogProfileUrl || ""
      );

      uploadedImages[0] &&
        EditUserProfileformData.append("profile_image", uploadedImages[0]);

      await editUserProfileMutation.mutateAsync(EditUserProfileformData);
      await editDogProfileMutation.mutate(EditDogProfileformData);
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
              imgUrl={profileUrl}
              updateUploadedFile={updateUploadedImages}
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
                  message: "닉네임은 영문, 숫자 1~8자리로 이루어져야 합니다.",
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
          className={styles.addDogProfileButton}
          onClick={() => setShowPuppyInfo(true)}
          style={{ display: isDogProfile ? "none" : "block" }}
        >
          +반려견 정보 추가
        </button>

        {isDogProfile && (
          <EditDogProfile
            dogProfile={dogProfile as unknown as EditDogProfileType}
            setDogProfile={setDogProfileInfo}
            setShowPuppyInfo={setShowPuppyInfo}
          />
        )}

        <button
          type="submit"
          className={isFormValid ? styles.activeButton : styles.nonActiveButton}
          disabled={!isFormValid}
        >
          완료
        </button>
      </main>
    </form>
  );
}
