/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useRef } from "react";
import * as styles from "./_style/inputImage.css";
import NullImage from "@/app/_assets/images/input-image.svg";
import ImgDeleteButton from "@/app/_assets/images/image-delete-button.svg";

// to do list
// 기존 이미지가 있을 때 그 이미지를 출력시키고 출력 시킨 이미지를 수정하는 로직을 추가해야함
// (현재는 서버에서 어떤 형태로 불러들일지 몰라 구현 못해둠)

interface InputImageProps {
  index?: number;
  updateUploadedFile: (index: number, file: File | null) => void;
}

export default function InputImage({
  index = 0,
  updateUploadedFile,
}: InputImageProps) {
  const [imgPath, setImgPath] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImgUpload = () => {
    fileInputRef?.current?.click();
  };

  const handleImgDelete = () => {
    setImgPath("");
    updateUploadedFile(index, null);
  };

  const previewImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImgPath(result);
      };
      updateUploadedFile(index, file);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {!imgPath ? (
        <div className={styles.inputImage} onClick={handleImgUpload}>
          <NullImage />
        </div>
      ) : (
        <div className={styles.inputImageContainer}>
          <img src={imgPath} alt="upload img" className={styles.inputImage} />
          <ImgDeleteButton
            className={styles.imgDeleteButton}
            onClick={handleImgDelete}
          />
        </div>
      )}
      <input
        type="file"
        id={`photo-${index}`}
        name={`photo-${index}`}
        accept=".png, .jpeg, .jpg"
        onChange={previewImage}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
    </div>
  );
}
