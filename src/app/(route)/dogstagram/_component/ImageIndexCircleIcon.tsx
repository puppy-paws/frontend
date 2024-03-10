import * as styles from "./_style/dogStagramPost.css";

interface props {
  images: string[];
  currentImageIndex: number;
}

export default function ImageIndexCircleIcon({
  images,
  currentImageIndex,
}: props) {
  return (
    <div className={styles.circleContainer}>
      {images.map((_, index) => (
        <div
          key={index}
          className={`${
            currentImageIndex === index ? styles.activeCircle : styles.circle
          }`}
        />
      ))}
    </div>
  );
}
{
}
