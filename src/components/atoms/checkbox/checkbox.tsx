import Link from "next/link";
import React, { InputHTMLAttributes, forwardRef } from "react";
import styles from "./checkbox.module.scss";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, ...checkboxProps }: CheckboxProps, ref) => (
    <div>
      <label htmlFor="checkbox">
        <input
          ref={ref}
          id="checkbox"
          className={`${styles.input} ${className} `}
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
