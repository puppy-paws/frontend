import * as React from "react";
import * as styles from "./_style/inputImage.css";
import ImageDeleteButton from "@/app/_assets/images/image-delete-button.svg";

interface UploadedImageProps {
  imgFile: string;
  handleImageReset: () => void;
}

export default function UploadedImage({
  imgFile,
  handleImageReset,
}: UploadedImageProps) {
  return (
    <div style={{ position: "relative" }}>
      <img src={imgFile} className={styles.inputImage} alt="프로필 이미지" />
      <ImageDeleteButton
        className={styles.imageDeleteButton}
        onClick={handleImageReset}
      />
    </div>
  );
}
