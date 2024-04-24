import * as styles from "./_style/dogStagramPost.css";
import DogStagramPost from "./DogStagramPost";
import StarDogStagramPost from "./StarDogStagramPost";
import DogStagramOptions from "./DogStagramOptions";

export default function DogStagramPostList() {
  return (
    <div className={styles.mainContainer}>
      <DogStagramOptions />
      <StarDogStagramPost />
      <DogStagramPost />
    </div>
  );
}
