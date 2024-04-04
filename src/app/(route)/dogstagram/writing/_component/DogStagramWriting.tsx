"use client";

import * as styles from "./_style/dogStagramWriting.css";
import ButtonContainer from "./ButtonContainer";
import { TextAreaField } from "@/app/(route)/profile/_component/TextareaValueValid";
import { regexPatterns } from "@/app/_const/regex";
import { ProfileFormData } from "@/app/_types/profile";
import { useForm } from "react-hook-form";
import InputImage from "@/app/(commons)/_component/InputImage";
import { useState } from "react";

export default function DogStargramWriting() {
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
      <h2 style={{ textAlign: "center" }}>게시물 등록</h2>
      <section className={styles.inputImageSectionContainer}>
        <div className={styles.galleryIndexIcon}>{uploadCount}/3</div>
        <div className={styles.inputImageContainer}>
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
