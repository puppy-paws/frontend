"use client";

import InputImage from "@/app/_assets/images/input-image.svg";
import { useState } from "react";
import * as styles from "./_style/createProfile.css";
import { useForm } from "react-hook-form";
import { regexPatterns } from "@/app/_const/regex";
import { InputField } from "../../_component/InputValueValid";
import CreateDogProfile from "./CreateDogProfile";

export interface ProfileFormData {
  nickname: string;
  email: string;
  dogName: string;
  dogBreed: string;
  dogCharacter: string;
  dogPersonality: string;
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
    // if (isValid) {
    //   console.log("성공");
    // }
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
          onClick={() => setShowPuppyInfo(true)}
          style={{ display: !showPuppyInfo ? "block" : "none" }}
        >
          +반려견 정보 추가
        </button>

        {showPuppyInfo && <CreateDogProfile />}

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
