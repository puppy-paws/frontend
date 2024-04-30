import Spinner from "@/app/_assets/images/spinner.svg";
import * as styles from "./_style/loadingSpinner.css";

export default function LoadingSpinner() {
  return (
    <div className={styles.blurContainer}>
      <Spinner className={styles.spinner} />
    </div>
  );
}
