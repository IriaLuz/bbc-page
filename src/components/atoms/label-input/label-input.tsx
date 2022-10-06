import React, { InputHTMLAttributes } from "react";
import styles from "./label-input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const LabelInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...labelInputProps }: InputProps, ref) => (
    <input
      ref={ref}
      className={`input ${styles.input} ${className}`}
      {...labelInputProps}
    />
  )
);
