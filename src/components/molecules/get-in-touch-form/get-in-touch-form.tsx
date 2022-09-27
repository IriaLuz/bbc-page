import React, { useState } from "react";
import { Checkbox, LabelInput, Button, TextBox } from "@components";
import styles from "./get-in-touch-form.module.scss";

export const GetInTouchForm = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  return (
    <div className={`container ${styles.gridContainer}`}>
      <div className={styles.gridItem}>
        <TextBox placeholder="Please share your experience" />
      </div>
      <h3 className={styles.titleContactInfo}>Your contact info</h3>
      <LabelInput placeholder="Name" />
      <LabelInput placeholder="Email address" />
      <LabelInput placeholder="Contact number" />
      <LabelInput placeholder="Location" />
      <LabelInput placeholder="Age" />
      <Checkbox
        handleChange={handleChange}
        checked={checked}
        label="I accept the"
      />
      <Button label="submit" />
    </div>
  );
};
