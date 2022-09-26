import React, { useState } from "react";
import { Checkbox, LabelInput } from "@components";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  return (
    <>
      <h1>Hello World</h1>
      <LabelInput placeholder="name" />
      <Checkbox
        handleChange={handleChange}
        checked={checked}
        label="I accept the"
      />
    </>
  );
};
export default Home;
