"use client";

import CompleteButton from "@/app/(commons)/_component/CompleteButton";
import * as styles from "./_style/dogStagramWriting.css";
import BackButton from "@/app/(commons)/post/_component/BackButton";

interface props {
  isValid: boolean;
}

export default function ButtonContainer({ isValid }: props) {
  return (
    <div className={styles.buttonContainer}>
      <CompleteButton isValid={isValid} />
      <BackButton type={"logo"} />
    </div>
  );
}
