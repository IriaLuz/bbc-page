import React, { useState } from "react";
import { Checkbox, LabelInput, Button } from "@components";

export const GetInTouchForm = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  return (
    <>
      <div>
        <LabelInput placeholder="Please share your experience" />
      </div>
      <div>
        <LabelInput placeholder="Name" />
        <LabelInput placeholder="Email address" />
        <LabelInput placeholder="Contact number" />
      </div>
      <div>
        <LabelInput placeholder="Location" />
        <LabelInput placeholder="Age" />
      </div>

      <Checkbox
        handleChange={handleChange}
        checked={checked}
        label="I accept the"
      />
      <Button primary={true} label="submit" />
    </>
  );
};
