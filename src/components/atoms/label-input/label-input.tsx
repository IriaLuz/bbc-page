import React from "react";
import styles from "./label-input.module.scss";

type LabelInputProps = {
  placeholder: string;
  className?: string;
  inputName?: string;
};

export const LabelInput: React.FC<LabelInputProps> = ({
  placeholder,
  className,
  inputName,
}) => (
  <input
    name={inputName}
    className={`input ${styles.input} ${className}`}
    type="text"
    placeholder={placeholder}
  />
);
