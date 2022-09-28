import "../styles/globals.scss";
import type { AppProps } from "next/app";
import React from "react";

if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
  /* eslint-disable */ const ReactDOM = require("react-dom");
  /* eslint-disable */ const axe = require("@axe-core/react");
  axe(React, ReactDOM, 1000);
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
