import * as React from "react";
import * as styles from "./_style/inputImage.css";
import InputImageIcon from "@/app/_assets/images/input-image.svg";

interface ImageUploadProps {
  handleImageClick: () => void;
  handleImageUpload: () => void;
  imgRef: React.RefObject<HTMLInputElement>;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  handleImageClick,
  handleImageUpload,
  imgRef,
}) => {
  return (
    <div className={styles.inputImage} onClick={handleImageClick}>
      <InputImageIcon />
      <input
        type="file"
        accept="image/*"
        id="profileImg"
        onChange={handleImageUpload}
        ref={imgRef}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default ImageUpload;
