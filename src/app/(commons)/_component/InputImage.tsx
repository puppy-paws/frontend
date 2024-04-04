"use client";

import { useState, useRef, Dispatch, SetStateAction } from "react";
import * as styles from "./_style/inputImage.css";
import InputImageIcon from "@/app/_assets/images/input-image.svg";
import ImageDeleteButton from "@/app/_assets/images/image-delete-button.svg";

interface Props {
  setUploadCount?: Dispatch<SetStateAction<number>>;
}

export default function InputImage({ setUploadCount }: Props) {
  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    if (imgRef.current) {
      imgRef.current.click();
    }
  };

  const saveImgFile = () => {
    const file = imgRef.current?.files?.[0];

    if (!file) {
      return;
    }

    if (setUploadCount) {
      setUploadCount((prevCount: number) => prevCount + 1);
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        setImgFile(reader.result);
      } else {
        console.error("Failed to read the file.");
      }
    };
  };

  const handleImageReset = () => {
    if (imgRef.current) {
      imgRef.current.value = "";
    }
    if (setUploadCount) {
      setUploadCount((prevCount: number) => prevCount - 1);
    }

    setImgFile("");
  };

  return (
    <div>
      {imgFile ? (
        <div style={{ position: "relative" }}>
          <img
            src={imgFile}
            className={styles.inputImage}
            alt="프로필 이미지"
          />
          <ImageDeleteButton
            className={styles.imageDeleteButton}
            onClick={handleImageReset}
          />
        </div>
      ) : (
        <div className={styles.inputImage} onClick={handleImageClick}>
          <InputImageIcon />
          <input
            type="file"
            accept="image/*"
            id="profileImg"
            onChange={saveImgFile}
            ref={imgRef}
            style={{ display: "none" }}
          />
        </div>
      )}
    </div>
  );
}
