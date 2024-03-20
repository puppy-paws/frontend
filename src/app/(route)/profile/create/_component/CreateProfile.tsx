"use client";

import InputImage from "@/app/_assets/images/input-image.svg";
import { useState } from "react";
import * as styles from "./_style/createProfile.css";
import { useForm } from "react-hook-form";
import { regexPatterns } from "@/app/_const/regex";
import { InputField } from "../../_component/InputValueValid";
import { TextAreaField } from "../../_component/TextareaValueValid";

interface ProfileFormData {
  nickname: string;
  email: string;
  dogName: string;
  dogBreed: string;
  dogCharacter: string;
}

{
  /* to do list */
}
{
  /* 1. 이미지 업로드 기능 구현 */
}
{
  /* 2. 이미지 업로드 완료 여부까지 체크해서 완료 버튼 활성화 or 비활성화 적용 */
}

export default function CreateProfile() {
  const [isduplication, setIsduplication] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showPuppyInfo, setShowPuppyInfo] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid = false },
    watch,
  } = useForm<ProfileFormData>({
    criteriaMode: "all",
    mode: "onChange",
  });

  const isFormValid = Object.values(watch()).every(
    (value) => value !== "" && !Object.keys(errors).length
  );

  const onSubmit = () => {
    if (isValid) {
      console.log("성공");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <main className={styles.container}>
        <section>
          <h2 style={{ textAlign: "center" }}>등록</h2>
          <div className={styles.inputImage}>
            <InputImage className={styles.profileImage} />
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
              value={watch("nickname") ?? ""}
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
            <h3>이메일</h3>
            <InputField
              label=""
              placeholder="이메일을 입력하세요."
              value={watch("email") ?? ""}
              error={errors.email?.message}
              register={register("email", {
                pattern: {
                  value: regexPatterns["email"],
                  message: "올바른 이메일 형식으로 입력하세요.",
                },
              })}
            />
          </div>
        </section>
        <button
          className={styles.addDogProfileButton}
          onClick={() => setShowPuppyInfo(!showPuppyInfo)}
          style={{ display: !showPuppyInfo ? "block" : "none" }}
        >
          +반려견 정보 추가
        </button>
        {showPuppyInfo && (
          <section className={styles.puppyInfoContainer}>
            <div className={styles.puppyInfoTitleContainer}>
              <h3>반려견 정보</h3>
              <button className={styles.puppyInfoDeleteButton}>삭제</button>
            </div>
            <InputField
              label="이름"
              placeholder="반려견의 이름을 입력하세요."
              value={watch("dogName") ?? ""}
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
              value={watch("dogBreed") ?? ""}
              error={errors.dogBreed?.message}
              register={register("dogBreed", {
                pattern: {
                  value: regexPatterns["dogBreed"],
                  message: "견종은 한글 1~20자리로 이루어져야 합니다.",
                },
              })}
            />
            <TextAreaField
              label="특징"
              placeholder="반려견의 특징을 입력해주세요."
              value={watch("dogCharacter") ?? ""}
              error={errors.dogCharacter?.message}
              register={register("dogCharacter", {
                pattern: {
                  value: regexPatterns["dogCharacter"],
                  message: "반려견의 특징은 1~30자리로 이루어져야 합니다.",
                },
              })}
            />

            <div className={styles.inputImageContainer}>
              <label className={styles.labelText}>사진</label>
              <div style={{ width: "100%" }}>
                <div className={styles.inputImage}>
                  <InputImage />
                </div>
              </div>
            </div>
          </section>
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
