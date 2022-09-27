import React from "react";
import styles from "./text-box.module.scss";

type TextBoxProps = {
  placeholder: string;
};

export const TextBox: React.FC<TextBoxProps> = ({ placeholder }) => (
  <textarea className={`input ${styles.textBox}`} placeholder={placeholder} />
);
