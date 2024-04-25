"use client";

import { useState } from "react";
import * as styles from "./_style/editProfile.css";
import { useForm } from "react-hook-form";
import { regexPatterns } from "@/app/_const/regex";
import { InputField } from "../../_component/InputValueValid";
import { ProfileFormData } from "@/app/_types/profile";
import EditDogProfile from "./EditDogProfile";
import { useUploadedImages } from "@/app/_hooks/useUploadedFiles";
import InputImage from "@/app/(commons)/_component/InputImage";

export default function EditProfile() {
  const [isduplication, setIsduplication] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showPuppyInfo, setShowPuppyInfo] = useState(false);
  const [uploadedImages, updateUploadedImages] = useUploadedImages();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
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
          <h2 style={{ textAlign: "center" }}>내 프로필 수정</h2>
          <InputImage updateUploadedFile={updateUploadedImages} />
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

        {/* 반려견 없거나 있던 반려견 정보를 삭제했을 때 보이게끔 */}
        <button
          className={styles.addDogProfileButton}
          onClick={() => setShowPuppyInfo(true)}
          style={{ display: !showPuppyInfo ? "block" : "none" }}
        >
          +반려견 정보 추가
        </button>

        {/* 수정할 반려견 정보가 있을시에만 출력 */}
        {showPuppyInfo && (
          <EditDogProfile setShowPuppyInfo={setShowPuppyInfo} />
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
