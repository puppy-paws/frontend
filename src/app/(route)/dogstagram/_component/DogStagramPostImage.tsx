/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import * as styles from "./_style/dogStagramPost.css";
import Gallery from "@/app/_assets/images/Gallery.svg";
import LeftArrow from "@/app/_assets/images/left-arrow.svg";
import RightArrow from "@/app/_assets/images/right-arrow.svg";
import ImageIndexCircleIcon from "./ImageIndexCircleIcon";
import { useRecoilValue } from "recoil";
import { DogStagramPostTypeProps } from "@/app/_types/dogStagram";
import {
  starDogStagramPostListState,
  dogStagramPostListState,
} from "@/app/_store/dogstagram/atoms";

type Props = {
  type: "dog" | "starDog";
  idx: number;
};

export default function DogStagramPostImage({ type, idx }: Props) {
  const dogStagramPostData =
    type === "starDog" ? starDogStagramPostListState : dogStagramPostListState;

  const dogStagramPostList = useRecoilValue(dogStagramPostData)[idx];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryUrl, setGalleryUrl] = useState(true);
  const { image_urls: rawImageUrls } = dogStagramPostList || {};
  const imageUrls = Array.isArray(rawImageUrls)
    ? rawImageUrls.filter((url) => url !== null)
    : [];

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      Math.min(imageUrls.length - 1, prevIndex + 1)
    );
  };

  const handleImageMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setGalleryUrl(false);
  };

  const handleImageMouseOut = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setGalleryUrl(true);
  };

  return (
    <div
      className={styles.mainImageContainer}
      onMouseLeave={(e) => {
        handleImageMouseOut(e);
      }}
      onMouseEnter={(e) => {
        handleImageMouseOver(e);
      }}
    >
      <img
        src={imageUrls[currentImageIndex]}
        alt={`Dog ${currentImageIndex}`}
        className={styles.dogImage}
      />
      {currentImageIndex > 0 && (
        <LeftArrow className={styles.leftArrow} onClick={goToPreviousImage} />
      )}
      {currentImageIndex < imageUrls.length - 1 && (
        <RightArrow className={styles.rightArrow} onClick={goToNextImage} />
      )}

      {imageUrls.length > 1 &&
        (!galleryUrl ? (
          <div className={styles.galleryIndexIcon}>
            {currentImageIndex + 1}/{imageUrls.length}
          </div>
        ) : (
          <Gallery className={styles.galleryIcon} />
        ))}
      {imageUrls.length > 1 && (
        <ImageIndexCircleIcon
          images={imageUrls}
          currentImageIndex={currentImageIndex}
        />
      )}
    </div>
  );
}
