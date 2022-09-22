import React from "react";
import styles from "./label-input.module.scss";

type LabelInputProps = {
  placeholder: string;
};

export const LabelInput: React.FC<LabelInputProps> = ({ placeholder }) => (
  <input
    className={`input ${styles.input}`}
    type="text"
    placeholder={placeholder}
  />
);
