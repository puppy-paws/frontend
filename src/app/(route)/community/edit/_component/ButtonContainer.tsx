"use client";

import * as styles from "@/app/(commons)/post/_component/_style/postCommons.css";
import BackButton from "@/app/(commons)/post/_component/BackButton";
import CompleteButton from "@/app/(commons)/_component/CompleteButton";
import { convertedPostValuesState } from "@/app/_store/community/atoms";

export default function ButtonContainer() {
  return (
    <div className={styles.buttonContainer}>
      <CompleteButton recoilState={convertedPostValuesState} />
      <BackButton type={"logo"} />
    </div>
  );
}
