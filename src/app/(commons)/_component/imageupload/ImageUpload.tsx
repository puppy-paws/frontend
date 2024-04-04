import * as React from "react";
import * as styles from "./_style/inputImage.css";
import InputImageIcon from "@/app/_assets/images/input-image.svg";

interface ImageUploadProps {
  handleImageClick: () => void;
}

export default function ImageUpload({ handleImageClick }: ImageUploadProps) {
  return (
    <div className={styles.inputImage} onClick={handleImageClick}>
      <InputImageIcon />
      <input
        type="file"
        accept="image/*"
        id="profileImg"
        style={{ display: "none" }}
      />
    </div>
  );
}
