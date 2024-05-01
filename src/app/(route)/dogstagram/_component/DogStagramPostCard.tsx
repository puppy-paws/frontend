import DogStagramPostImage from "./DogStagramPostImage";
import DogStagramPostContents from "./DogStagramPostContents";
import * as styles from "./_style/dogStagramPost.css";
import { DogStagramPostTypeProps } from "@/app/_types/dogStagram";

export default function DogStagramPostCard({ type }: DogStagramPostTypeProps) {
  return (
    <div className={styles.cardContainer}>
      <DogStagramPostImage type={type} />
      <DogStagramPostContents type={type} />
    </div>
  );
}
