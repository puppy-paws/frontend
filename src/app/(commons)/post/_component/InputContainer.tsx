import React, { ReactNode } from "react";
import * as styles from "./_style/postCommons.css";

interface Props {
  labelText: string;
  children: ReactNode;
  renderNonActiveInput?: boolean;
}

export default function InputContainer({
  labelText,
  children,
  renderNonActiveInput = true,
}: Props) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.labelText}>{labelText}</label>
      {renderNonActiveInput ? (
        <div className={styles.nonActiveInput}>{children}</div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
}
