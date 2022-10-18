import React, { ChangeEvent, FC } from "react";
import styles from "./text-box.module.scss";

type TextBoxProps = {
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  count: number;
  className?: string;
  textMaxLength: number;
};

export const TextBox: FC<TextBoxProps> = ({
  placeholder,
  onChange,
  count,
  className,
  textMaxLength,
}) => (
  <div>
    <textarea
      data-testid="textarea"
      maxLength={textMaxLength}
      className={`input ${styles.textBox} ${className}`}
      placeholder={placeholder}
      onChange={onChange}
    />
    <p className={styles.counter}>
      {count}/ {String(textMaxLength)}
    </p>
  </div>
);
