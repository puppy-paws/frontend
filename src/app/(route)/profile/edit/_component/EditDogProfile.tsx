"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import * as styles from "./_style/editProfile.css";
import { useForm } from "react-hook-form";
import { regexPatterns } from "@/app/_const/regex";
import { InputField } from "../../_component/InputValueValid";
import DogPersonalities from "../../_component/DogPersonalities";
import { EditDogProfile, ProfileFormData } from "@/app/_types/profile";
import { useUploadedImages } from "@/app/_hooks/useUploadedFiles";
import InputImage from "@/app/(commons)/_component/InputImage";
import { produce } from "immer";
import { useDeleteDogProfile } from "@/app/_service/profile/useDeleteDogProfile";

interface EditDogProfileProps {
  setShowPuppyInfo: Dispatch<SetStateAction<boolean>>;
  dogProfile: EditDogProfile;
  setDogProfile: Dispatch<SetStateAction<EditDogProfile>>;
  setIsValidDogProfile: Dispatch<SetStateAction<boolean>>;
}

export default function EditDogProfile({
  dogProfile,
  setShowPuppyInfo,
  setDogProfile,
  setIsValidDogProfile,
}: EditDogProfileProps) {
  const deleteDogProfile = useDeleteDogProfile();
  const { dogName, dogType, dogCharacters, dogProfileUrl } = dogProfile;
  const [dogPersonalities, setDogPersonalities] = useState<string[]>(
    dogCharacters.filter((value) => value !== "undefined" && value !== "")
  );
  const [uploadedImages, updateUploadedImages] = useUploadedImages();
  const {
    register,
    formState: { errors, isValid },
    watch,
    reset,
    resetField,
  } = useForm<ProfileFormData>({
    criteriaMode: "all",
    mode: "onChange",
    defaultValues: {
      dogName: dogName,
      dogBreed: dogType,
    },
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && !e.nativeEvent.isComposing && isValid) {
      const inputValue = watch("dogPersonality");
      setDogPersonalities((prev) => [...prev, `${inputValue}`]);
      resetField("dogPersonality");
    }
  };

  const handleDeleteDogProfile = () => {
    setShowPuppyInfo(false);
    deleteDogProfile.mutate();
  };

  useEffect(() => {
    setDogProfile((prev: EditDogProfile) =>
      produce(prev, (draft) => {
        draft.dogName = watch("dogName");
        draft.dogType = watch("dogBreed");
        draft.dogCharacters = dogPersonalities;
        draft.dogProfileUrl = uploadedImages[0] || "";
      })
    );
  }, [dogPersonalities, setDogProfile, watch, uploadedImages]);

  useEffect(() => {
    setIsValidDogProfile(isValid);
  }, [isValid, setIsValidDogProfile]);

  return (
    <section className={styles.puppyInfoContainer}>
      <div className={styles.puppyInfoTitleContainer}>
        <h3>반려견 정보</h3>
        <button
          type="button"
          className={styles.puppyInfoDeleteButton}
          onClick={() => {
            handleDeleteDogProfile();
          }}
        >
          삭제
        </button>
      </div>
      <InputField
        label="이름"
        placeholder="반려견의 이름을 입력하세요."
        value={watch("dogName") || ""}
        error={errors.dogName?.message}
        register={register("dogName", {
          pattern: {
            value: regexPatterns["dogName"],
            message: "반려견의 이름은 한글 1~8자리로 이루어져야 합니다.",
          },
        })}
      />

      <InputField
        label="견종"
        placeholder="견종을 입력하세요."
        value={watch("dogBreed") || ""}
        error={errors.dogBreed?.message}
        register={register("dogBreed", {
          pattern: {
            value: regexPatterns["dogBreed"],
            message: "견종은 한글 1~20자리로 이루어져야 합니다.",
          },
        })}
      />
      <div className={styles.dogPersonalityContainer}>
        <InputField
          label="성격"
          placeholder="키워드를 입력하시고 엔터키를 눌러주세요. (최대 두 개)"
          value={watch("dogPersonality") ?? ""}
          error={errors.dogPersonality?.message}
          valid={dogPersonalities.length >= 2}
          onKeyDown={handleKeyDown}
          register={register("dogPersonality", {
            pattern: {
              value: regexPatterns["dogPersonality"],
              message: "반려견의 성격은 한글 1~5자리로 이루어져야 합니다.",
            },
          })}
        />
        <div className={styles.dogPersonalityValueContainer}>
          {dogPersonalities.map((value, idx) => (
            <DogPersonalities
              value={value}
              key={idx}
              setData={setDogPersonalities}
            />
          ))}
        </div>
      </div>

      <div className={styles.inputImageContainer}>
        <label className={styles.labelText}>사진</label>
        <div style={{ width: "100%" }}>
          <InputImage
            imgUrl={typeof dogProfileUrl === "string" ? dogProfileUrl : ""}
            updateUploadedFile={updateUploadedImages}
          />
        </div>
      </div>
    </section>
  );
}
