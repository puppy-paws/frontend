"use client";

import * as styles from "./_style/dogStagramWriting.css";
import ButtonContainer from "./ButtonContainer";
import { TextAreaField } from "@/app/(route)/profile/_component/TextareaValueValid";
import { regexPatterns } from "@/app/_const/regex";
import { ProfileFormData } from "@/app/_types/profile";
import { useForm } from "react-hook-form";
import NullImage from "@/app/_assets/images/input-image.svg";
import { useRecoilValue } from "recoil";
import { dogStagramPostListState } from "@/app/_store/dogstagram/atoms";
import { useEditDogStagramPost } from "@/app/_service/dogStagram/useEditCommunityPost";
import { useEffect, useState } from "react";
import { produce } from "immer";
import { EditDogStagramPost } from "@/app/_types/dogStagram";

type ParamsProps = {
  postId: number;
};

export default function DogStargramEditing({ postId }: ParamsProps) {
  const {
    register,
    formState: { errors, isValid },
    watch,
  } = useForm<ProfileFormData>({
    criteriaMode: "all",
    mode: "onChange",
  });
  const dogStagramPostList = useRecoilValue(dogStagramPostListState);
  const [getDogStagramDetailPostInfo] = dogStagramPostList.filter(
    (value) => value.id === +postId
  );
  const { description, image_urls: imageUrls } = getDogStagramDetailPostInfo;
  const [descriptionValue, setDescriptionValue] = useState({
    description: description,
  });
  const editDogStagramPost = useEditDogStagramPost(postId);

  useEffect(() => {
    setDescriptionValue((prevValue: EditDogStagramPost) =>
      produce(prevValue, (draft: EditDogStagramPost) => {
        draft.description = watch("dogBoast");
      })
    );
  }, [watch("dogBoast")]);

  const handleEditDogStagramPost = async () => {
    editDogStagramPost.mutate(descriptionValue);
  };

  return (
    <main className={styles.container}>
      <h2 style={{ textAlign: "center" }}>게시물 수정</h2>
      <section className={styles.inputImageSectionContainer}>
        <div className={styles.inputImageContainer}>
          {imageUrls.map((url: string, idx) =>
            // <InputImage
            //   key={idx}
            //   imgUrl={url}
            //   updateUploadedFile={updateUploadedImages}
            //   disabled={"disabled"}
            // />

            url === null || url === "" ? (
              <div key={idx} className={styles.inputImage}>
                <NullImage />
              </div>
            ) : (
              <img
                key={idx}
                src={url}
                alt="dog img"
                className={styles.inputImage}
              />
            )
          )}
        </div>
      </section>
      <section className={styles.contentsContainer}>
        <div className={styles.textareaFieldContainer}>
          <TextAreaField
            label=""
            placeholder="내 반려견의 자랑 포인트를 적어주세요."
            value={watch("dogBoast") ?? description}
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
        <ButtonContainer handler={handleEditDogStagramPost} isValid={isValid} />
      </section>
    </main>
  );
}
