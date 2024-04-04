"use client";

import * as styles from "./_style/dogStagramWriting.css";
import ButtonContainer from "./ButtonContainer";
import { TextAreaField } from "@/app/(route)/profile/_component/TextareaValueValid";
import { regexPatterns } from "@/app/_const/regex";
import { ProfileFormData } from "@/app/_types/profile";
import { useForm } from "react-hook-form";
import { useState } from "react";
import InputImage from "@/app/(commons)/_component/imageupload/InputImage";

export default function DogStargramEditing() {
  const {
    register,
    formState: { errors, isValid = false },
    watch,
  } = useForm<ProfileFormData>({
    criteriaMode: "all",
    mode: "onChange",
  });
  const [uploadCount, setUploadCount] = useState(0);

  return (
    <main className={styles.container}>
      <h2 style={{ textAlign: "center" }}>게시물 수정</h2>
      <section className={styles.inputImageSectionContainer}>
        <div className={styles.galleryIndexIcon}>{uploadCount}/3</div>
        <div className={styles.inputImageContainer}>
          {/* 기존 이미지 불러와서 props로 넘기는 로직 추가 예정 
          블러오는 이미지 있을 때 마다 setUploadCount +1씩 해야함*/}
          <InputImage setUploadCount={setUploadCount} />
          <InputImage setUploadCount={setUploadCount} />
          <InputImage setUploadCount={setUploadCount} />
        </div>
      </section>
      <section className={styles.contentsContainer}>
        <div className={styles.textareaFieldContainer}>
          <TextAreaField
            label=""
            placeholder="내 반려견의 자랑 포인트를 적어주세요."
            value={watch("dogBoast") ?? undefined}
            error={errors.dogBoast?.message}
            register={register("dogBoast", {
              required: "반려견의 자랑 포인트를 입력해주세요.",
              pattern: {
                value: regexPatterns["dogBoast"],
                message:
                  "내 반려견의 자랑 포인트는 1~30자리로 이루어져야 합니다.",
              },
            })}
          />
        </div>
        <ButtonContainer isValid={isValid} />
      </section>
    </main>
  );
}
