import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./index.page";

it(" should render the Hello World without issues", async () => {
  render(<Home />);
  expect(screen.getByText(/Hello World/)).toBeInTheDocument();
});
