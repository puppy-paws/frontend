/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useRef, Dispatch, SetStateAction } from "react";
import * as styles from "./_style/inputImage.css";
import NullImage from "@/app/_assets/images/input-image.svg";
import ImgDeleteButton from "@/app/_assets/images/image-delete-button.svg";

interface InputImageProps {
  index?: number;
  updateUploadedFile: (index: number, file: File | null) => void;
  imgUrl?: string;
  disabled?: string;
  setIsDelete?: Dispatch<SetStateAction<boolean>>;
}

export default function InputImage({
  index = 0,
  updateUploadedFile,
  imgUrl = "",
  disabled,
  setIsDelete,
}: InputImageProps) {
  const [imgPath, setImgPath] = useState(imgUrl);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImgUpload = () => {
    fileInputRef?.current?.click();
  };

  const handleImgDelete = () => {
    if (setIsDelete) {
      setIsDelete(true);
    }
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
      if (setIsDelete) {
        setIsDelete(false);
      }
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
            style={disabled && { display: "none" }}
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
