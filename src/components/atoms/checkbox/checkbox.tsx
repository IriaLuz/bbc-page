import Link from "next/link";
import React, { InputHTMLAttributes } from "react";
import styles from "./checkbox.module.scss";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { handleChange, label, className, ...checkboxProps }: CheckboxProps,
    ref
  ) => (
    <div>
      <label htmlFor="checkbox">
        <input
          ref={ref}
          id="checkbox"
          className={`${styles.input} ${className} `}
          onChange={handleChange}
          {...checkboxProps}
        />
        {label}
        <Link href="/" passHref>
          Terms and Conditions
        </Link>
      </label>
    </div>
  )
);
