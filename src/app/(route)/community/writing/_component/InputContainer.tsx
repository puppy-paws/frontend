import React from "react";
import * as styles from "./_style/writing.css";

const InputContainer = ({
  labelText,
  children,
  renderNonActiveInput = true,
}: any) => {
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
};

export default InputContainer;
