/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import * as styles from "./_style/dogStagramPost.css";
import Gallery from "@/app/_assets/images/Gallery.svg";
import LeftArrow from "@/app/_assets/images/left-arrow.svg";
import RightArrow from "@/app/_assets/images/right-arrow.svg";
import ImageIndexCircleIcon from "./imageIndexCircleIcon";

interface props {
  images: string[];
}

export default function DogStagramPostImage({ images }: props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryUrl, setGalleryUrl] = useState(true);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      Math.min(images.length - 1, prevIndex + 1)
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
        src={images[currentImageIndex]}
        alt={`Dog ${currentImageIndex}`}
        className={styles.dogImage}
      />
      {currentImageIndex > 0 && (
        <LeftArrow className={styles.leftArrow} onClick={goToPreviousImage} />
      )}
      {currentImageIndex < images.length - 1 && (
        <RightArrow className={styles.rightArrow} onClick={goToNextImage} />
      )}

      {images.length > 1 &&
        (!galleryUrl ? (
          <div className={styles.galleryIndexIcon}>
            {currentImageIndex + 1}/{images.length}
          </div>
        ) : (
          <Gallery className={styles.galleryIcon} />
        ))}
      {images.length > 1 && (
        <ImageIndexCircleIcon
          images={images}
          currentImageIndex={currentImageIndex}
        />
      )}
    </div>
  );
}
