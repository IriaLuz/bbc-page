import React from "react";
import styles from "./text-box.module.scss";

type TextBoxProps = {
  placeholder: string;
};

export const TextBox: React.FC<TextBoxProps> = ({ placeholder }) => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <textarea
        maxLength={500}
        className={`input ${styles.textBox}`}
        placeholder={placeholder}
        onChange={(e) => setCount(e.target.value.length)}
      />
      <p className={styles.counter}>{count}/500</p>
    </div>
  );
};
