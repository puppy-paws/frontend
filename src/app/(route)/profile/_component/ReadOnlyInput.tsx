import React, { ReactNode } from "react";
import * as styles from "./_style/profile.css";

interface Props {
  children: ReactNode;
}

export default function ReadOnlyInput({ children }: Props) {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.nonActiveInput}>{children}</div>
    </div>
  );
}
