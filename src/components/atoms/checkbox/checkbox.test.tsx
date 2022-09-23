import * as React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { Checkbox } from "./checkbox";

afterEach(cleanup);
// When browser loaded and tests first clicked, all pass
// When tests re-run, something in memory fails tests.
// Just reload browser
//------------------------------------------------------------------------------
test("checkbox handleChange is called when clicked", () => {
  const handleChange = jest.fn();
  render(<Checkbox label={"A"} checked={false} handleChange={handleChange} />);

  const checkbox = screen.getByTestId("test");
  fireEvent.click(checkbox);
  expect(handleChange).toHaveBeenCalledTimes(1);
});
//-------------------------------------------------------------------------------
test("checkbox is checked when true value provided", () => {
  const handleChange = jest.fn();
  render(
    <Checkbox
      label={"this is a checkbox"}
      checked={true}
      handleChange={handleChange}
    />
  );

  const checkbox = screen.getByTestId("test");
  expect((checkbox as HTMLInputElement).checked).toEqual(true);
});
//------------------------------------------------------------------------------
test("checkbox is unchecked when false value provided", () => {
  const handleChangeA = jest.fn();
  render(
    <Checkbox
      label={"this is a checkbox"}
      checked={false}
      handleChange={handleChangeA}
    />
  );

  const checkbox = screen.getByTestId("test");
  const isChecked = (checkbox as HTMLInputElement).checked;
  expect(isChecked).toEqual(false);
});
