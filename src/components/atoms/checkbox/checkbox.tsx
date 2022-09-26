import Link from "next/link";
import styles from "./checkbox.module.scss";

type CheckboxProps = {
  checked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
};

export const Checkbox = ({ checked, handleChange, label }: CheckboxProps) => (
  <div>
    <label htmlFor="checkbox">
      <input
        id="checkbox"
        className={styles.input}
        type="checkbox"
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
);
