"use client";

import { useState, useRef, Dispatch, SetStateAction } from "react";
import ImageUpload from "./ImageUpload";
import UploadedImage from "./ImageUploaded";

interface Props {
  setUploadCount?: Dispatch<SetStateAction<number>>;
  imgsrc?: string;
}

export default function InputImage({ setUploadCount, imgsrc = "" }: Props) {
  const [imgFile, setImgFile] = useState(imgsrc);
  const imgRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    if (imgRef.current) {
      imgRef.current.click();
    }
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
        <UploadedImage imgFile={imgFile} handleImageReset={handleImageReset} />
      ) : (
        <ImageUpload handleImageClick={handleImageClick} />
      )}
    </div>
  );
}
