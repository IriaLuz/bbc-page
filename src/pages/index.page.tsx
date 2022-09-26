import type { NextPage } from "next";
import { LabelInput } from "@components";

const Home: NextPage = () => (
  <>
    <h1>Hello World</h1>
    <LabelInput placeholder="name" />
  </>
);

export default Home;
