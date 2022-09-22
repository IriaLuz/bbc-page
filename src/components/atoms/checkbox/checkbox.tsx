import React, { useState } from "react";
import Link from "next/link";

export const Checkbox = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = () => setChecked(!checked);

  return (
    <div>
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />I
        accept the{" "}
        <Link href="/" passHref>
          Terms and Conditions
        </Link>
      </label>
      <p>Is the box checked? {checked.toString()}</p>
    </div>
  );
};
