import { UseFormRegisterReturn } from "react-hook-form";
import * as styles from "./_style/profile.css";

interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  error?: string | undefined;
  register: UseFormRegisterReturn<string>;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  valid?: boolean;
}

export function InputField({
  label,
  placeholder,
  value,
  error,
  register,
  onKeyDown,
  valid,
}: InputFieldProps) {
  let inputClassName;

  if (error) {
    inputClassName = styles.errorInput;
  } else if (valid) {
    inputClassName = styles.nonActiveInput;
  } else {
    inputClassName = styles.activeInput;
  }

  return (
    <div className={styles.inputFieldContainer}>
      {label && <label className={styles.labelText}>{label}</label>}
      <div className={styles.inputContainer}>
        <input
          className={inputClassName}
          placeholder={placeholder}
          value={value}
          {...register}
          onKeyDown={onKeyDown}
          disabled={valid}
        />
        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>
    </div>
  );
}
