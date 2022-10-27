import * as React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { Checkbox } from "@atoms";

afterEach(cleanup);
// When browser loaded and tests first clicked, all pass
// When tests re-run, something in memory fails tests.
// Just reload browser

test("checkbox is unchecked when false value provided", () => {
  render(<Checkbox label={"this is a checkbox"} type="checkbox" />);

  const checkbox = screen.getByRole("checkbox");
  const isChecked = (checkbox as HTMLInputElement).checked;
  expect(isChecked).toEqual(false);
});
