"use client";

import { useState, useRef, Dispatch, SetStateAction } from "react";
import ImageUpload from "./ImageUpload";
import ImageUploaded from "./ImageUploaded";

interface Props {
  setUploadCount?: Dispatch<SetStateAction<number>>;
  imgsrc?: string;
}

export default function InputImage({ setUploadCount, imgsrc = "" }: Props) {
  const [imgFile, setImgFile] = useState(imgsrc);
  const imgRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = () => {
    const file = imgRef.current?.files?.[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        setImgFile(reader.result);
        if (setUploadCount) {
          setUploadCount((prevCount: number) => prevCount + 1);
        }
      } else {
        console.error("Failed to read the file.");
      }
    };
  };

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
        <ImageUploaded imgFile={imgFile} handleImageReset={handleImageReset} />
      ) : (
        <ImageUpload
          handleImageClick={handleImageClick}
          handleImageUpload={handleImageUpload}
          imgRef={imgRef}
        />
      )}
    </div>
  );
}
