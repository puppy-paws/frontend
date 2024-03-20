import { UseFormRegisterReturn } from "react-hook-form";
import * as styles from "./_style/profile.css";

interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  error?: string | undefined;
  register: UseFormRegisterReturn<string>;
}

export function InputField({
  label,
  placeholder,
  value,
  error,
  register,
}: InputFieldProps) {
  return (
    <div className={styles.inputFieldContainer}>
      {label && <label className={styles.labelText}>{label}</label>}
      <div className={styles.inputContainer}>
        <input
          className={styles.activeInput}
          placeholder={placeholder}
          value={value}
          {...register}
        />
        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>
    </div>
  );
}
