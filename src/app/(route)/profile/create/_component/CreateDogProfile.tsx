import InputImage from "@/app/_assets/images/input-image.svg";
import { useState } from "react";
import * as styles from "./_style/createProfile.css";
import { useForm } from "react-hook-form";
import { regexPatterns } from "@/app/_const/regex";
import { InputField } from "../../_component/InputValueValid";
import { TextAreaField } from "../../_component/TextareaValueValid";
import DogPersonalities from "../../_component/DogPersonalities";
import { ProfileFormData } from "./CreateProfile";

export default function CreateDogProfile() {
  const [dogPersonalities, setDogPersonalities] = useState<string[]>([]);

  const {
    register,
    formState: { errors, isValid = false },
    watch,
    reset,
  } = useForm<ProfileFormData>({
    criteriaMode: "all",
    mode: "onChange",
  });

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter" && !e.nativeEvent.isComposing && isValid) {
      const inputValue = watch("dogPersonality");
      setDogPersonalities((prev) => [...prev, `#${inputValue}`]);
      reset({ dogPersonality: "" });
    }
  };
  return (
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

      <div className={styles.dogPersonalityContainer}>
        <InputField
          label="성격"
          placeholder="#키워드를 입력하세요 (최대 두 개)"
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
          {dogPersonalities.map((value, idx) => {
            return (
              <DogPersonalities
                value={value}
                key={idx}
                setData={setDogPersonalities}
              />
            );
          })}
        </div>
      </div>

      <div className={styles.inputImageContainer}>
        <label className={styles.labelText}>사진</label>
        <div style={{ width: "100%" }}>
          <div className={styles.inputImage}>
            <InputImage />
          </div>
        </div>
      </div>
    </section>
  );
}
