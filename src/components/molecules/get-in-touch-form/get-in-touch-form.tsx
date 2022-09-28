import React, { useState } from "react";
import { Checkbox, LabelInput, Button, TextBox } from "@atoms";
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
      <h3>Your contact info</h3>
      <div className={styles.smallInput}>
        <LabelInput placeholder="Name" />
        <LabelInput placeholder="Email address" />
        <LabelInput placeholder="Contact number" />
      </div>
      <LabelInput placeholder="Location" />
      <LabelInput placeholder="Age" />
      <Checkbox
        handleChange={handleChange}
        checked={checked}
        label="I accept the"
      />
      <Button label="Submit" />
    </div>
  );
};
