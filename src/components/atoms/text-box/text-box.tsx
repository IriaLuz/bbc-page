import React, { ChangeEvent, InputHTMLAttributes, forwardRef } from "react";
import styles from "./text-box.module.scss";

interface TextBoxProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  count: number;
  className?: string;
  textMaxLength: number;
}

export const TextBox = forwardRef<HTMLTextAreaElement, TextBoxProps>(
  (
    {
      placeholder,
      onChange,
      count,
      className,
      textMaxLength,
      name,
    }: TextBoxProps,
    ref
  ) => (
    <div>
      <textarea
        data-testid="textarea"
        maxLength={textMaxLength}
        className={`input ${styles.textBox} ${className}`}
        placeholder={placeholder}
        onChange={onChange}
        ref={ref}
        name={name}
      />
      <p className={styles.counter}>
        {count}/ {String(textMaxLength)}
      </p>
    </div>
  )
);
