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
  ({ checked, type, handleChange, label, className }: CheckboxProps, ref) => (
    <div>
      <label htmlFor="checkbox">
        <input
          ref={ref}
          id="checkbox"
          className={`${styles.input} ${className} `}
          type={type}
          checked={checked}
          onChange={handleChange}
        />
        {label}
        <Link href="/" passHref>
          Terms and Conditions
        </Link>
      </label>
      <p>Is the box checked?{checked.toString()}</p>
    </div>
  )
);
