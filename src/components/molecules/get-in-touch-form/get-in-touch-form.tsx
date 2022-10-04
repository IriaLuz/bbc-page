import React, { useState } from "react";
import { Checkbox, LabelInput, Button, TextBox } from "@atoms";
import styles from "./get-in-touch-form.module.scss";

export const GetInTouchForm = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [count, setCount] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCount(e.target.value.length);
  };

  return (
    <form
      aria-label="How is the rising cost of living affecting you?"
      name="get in touch form"
      className={`container ${styles.formContainer}`}
    >
      {/* why this extra div can it not be passed to the TEXTBox */}
      <div className={styles.textBox}>
        <TextBox
          data-testid="comment"
          aria-label="Please share your experiences"
          onChange={onChange}
          count={count}
          placeholder="Please share your experience"
        />
      </div>
      <h3>Your contact info</h3>
      <div className={styles.smallInput}>
        <LabelInput aria-label="User name" placeholder="Name" />
        <LabelInput aria-label="User email" placeholder="Email address" />
        <LabelInput
          aria-label="User contact number"
          placeholder="Contact number"
        />
      </div>
      <LabelInput aria-label="User Location" placeholder="Location" />
      <LabelInput aria-label="User Age" placeholder="Age" />
      <Checkbox
        aria-label="checkbox to accept the terms conditions"
        handleChange={handleChange}
        checked={checked}
        label="I accept the"
      />
      <Button
        type="submit"
        aria-label="submit button"
        role="button"
        label="Submit"
      />
    </form>
  );
};
