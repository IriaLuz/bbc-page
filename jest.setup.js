import "@testing-library/jest-dom";
import "jest-axe/extend-expect";
import { loadEnvConfig } from "@next/env";
import { resolve } from "path";

const envFile = resolve(__dirname, ".");
loadEnvConfig(envFile);
