import React from "react";
import styles from "./text-box.module.scss";

type TextBoxProps = {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  count: number;
};

export const TextBox: React.FC<TextBoxProps> = ({
  placeholder,
  onChange,
  count,
}) => (
  <div>
    <textarea
      data-testid="textarea"
      maxLength={500}
      className={`input ${styles.textBox}`}
      placeholder={placeholder}
      onChange={onChange}
    />
    <p className={styles.counter}>{count}/500</p>
  </div>
);
