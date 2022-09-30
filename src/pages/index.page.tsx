import React from "react";
import type { NextPage } from "next";
import { GetInTouchForm, TextBox } from "@components";

const Home: NextPage = () => {
  const [count, setCount] = React.useState(0);
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCount(e.target.value.length);
  };
  return (
    <>
      <h1>Hello World</h1>
      <TextBox placeholder="hola" onChange={onChange} count={count} />
      <GetInTouchForm />
    </>
  );
};
export default Home;
