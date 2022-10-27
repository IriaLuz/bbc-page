import * as React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { TextBox } from "@atoms";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);
test("textArea onChange is called when clicked", async () => {
  const onChange = jest.fn();
  render(
    <TextBox
      placeholder="A"
      count={0}
      onChange={onChange}
      textMaxLength={500}
    />
  );

  await userEvent.type(screen.getByTestId("textarea"), "hello");
  expect(onChange).toHaveBeenCalledTimes(5);
});
