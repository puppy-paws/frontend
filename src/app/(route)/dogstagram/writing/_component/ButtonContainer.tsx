"use client";

import CompleteButton from "@/app/(commons)/_component/CompleteButton";
import * as styles from "./_style/dogStagramWriting.css";
import BackButton from "@/app/(commons)/post/_component/BackButton";

interface props {
  isValid: boolean;
  handler: () => void;
}

export default function ButtonContainer({ isValid, handler }: props) {
  return (
    <div className={styles.buttonContainer}>
      <CompleteButton handler={handler} isValid={isValid} />
      <BackButton type={"logo"} />
    </div>
  );
}
