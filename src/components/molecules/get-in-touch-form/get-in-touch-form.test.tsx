import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { TextBox } from "@atoms";
import userEvent from "@testing-library/user-event";
import { GetInTouchForm } from "./get-in-touch-form";

const setup = () => {
  const utils = render(<GetInTouchForm />);
  const input = utils.getByPlaceholderText("Please share your experience");
  return {
    input,
    ...utils,
  };
};

afterEach(cleanup);

it("Texbox component render properly in get in touch form", async () => {
  const onChange = jest.fn();
  render(<TextBox onChange={onChange} count={0} placeholder="test" />);

  await userEvent.type(screen.getByTestId("textarea"), "hello");
  expect(onChange).toHaveBeenCalledTimes(5);
});

it("should be able to type a comment in the form", () => {
  const { input } = setup();
  fireEvent.change(input, {
    target: { value: "this is a comment" },
  });
  expect((input as HTMLInputElement).value).toBe("this is a comment");
});
