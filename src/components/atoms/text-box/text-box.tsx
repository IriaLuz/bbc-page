import React from "react";
import styles from "./text-box.module.scss";

type TextBoxProps = {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  count: number;
  className?: string;
};

export const TextBox: React.FC<TextBoxProps> = ({
  placeholder,
  onChange,
  count,
  className,
}) => (
  <div>
    <textarea
      data-testid="textarea"
      maxLength={500}
      className={`input ${styles.textBox} ${className}`}
      placeholder={placeholder}
      onChange={onChange}
    />
    <p className={styles.counter}>{count}/500</p>
  </div>
);
