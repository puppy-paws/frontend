"use client";

import DogStagramPostImage from "./DogStagramPostImage";
import DogStagramPostContents from "./DogStagramPostContents";
import * as styles from "./_style/dogStagramPost.css";
import { DogStagramPostTypeProps } from "@/app/_types/dogStagram";

export default function DogStagramPostCard({
  type,
  idx,
  onMenuIconClick,
  activeIndex,
}: DogStagramPostTypeProps) {
  return (
    <div className={styles.cardContainer}>
      <DogStagramPostImage idx={idx} type={type} />
      <DogStagramPostContents
        idx={idx}
        type={type}
        onMenuIconClick={onMenuIconClick}
        activeIndex={activeIndex}
      />
    </div>
  );
}
