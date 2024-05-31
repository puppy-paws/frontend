"use client";

import * as styles from "./_style/dogStagramWriting.css";
import ButtonContainer from "./ButtonContainer";
import { TextAreaField } from "@/app/(route)/profile/_component/TextareaValueValid";
import { regexPatterns } from "@/app/_const/regex";
import { ProfileFormData } from "@/app/_types/profile";
import { useForm } from "react-hook-form";
import { useUploadedImages } from "@/app/_hooks/useUploadedFiles";
import InputImage from "@/app/(commons)/_component/InputImage";
import { useCreateDogStagramPost } from "@/app/_service/dogStagram/useCreateDogStagramPost";

export default function DogStargramWriting() {
  const createDogStagramPost = useCreateDogStagramPost();
  const {
    register,
    formState: { errors, isValid },
    watch,
  } = useForm<ProfileFormData>({
    criteriaMode: "all",
    mode: "onChange",
  });

  const [uploadedImages, updateUploadedImages] = useUploadedImages();
  const createDogStagramFormData = new FormData();

  const handleCreateDogStagramPost = () => {
    uploadedImages[0] &&
      createDogStagramFormData.append("image", uploadedImages[0]);
    uploadedImages[1] &&
      createDogStagramFormData.append("image2", uploadedImages[1]);
    uploadedImages[2] &&
      createDogStagramFormData.append("image3", uploadedImages[2]);
    createDogStagramFormData.append("description", watch("dogBoast"));

    createDogStagramPost.mutate(createDogStagramFormData);
  };

  return (
    <main className={styles.container}>
      <h2 style={{ textAlign: "center" }}>게시물 등록</h2>
      <section className={styles.inputImageSectionContainer}>
        <div className={styles.galleryIndexIcon}>{uploadedImages.length}/3</div>
        <div className={styles.inputImageContainer}>
          <InputImage updateUploadedFile={updateUploadedImages} index={0} />
          <InputImage updateUploadedFile={updateUploadedImages} index={1} />
          <InputImage updateUploadedFile={updateUploadedImages} index={2} />
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
        <ButtonContainer
          handler={handleCreateDogStagramPost}
          isValid={isValid}
        />
      </section>
    </main>
  );
}
