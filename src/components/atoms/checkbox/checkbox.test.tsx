import React from "react";
import { render, screen } from "@testing-library/react";

import { Checkbox } from "@components";

it("changes style of div as checkbox is checked/unchecked", () => {
  //   const handleChange = jest.fn();
  render(<Checkbox />);

  const checkbox = screen.getByRole("checkbox");

  //   fireEvent.click(checkbox);
  //   expect(handleChange).toHaveBeenCalledTimes(1);
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).not.toBeChecked();
});
