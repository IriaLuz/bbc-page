import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { Button } from "@components";

describe("Test Button component", () => {
  it("IconButton component is rendered", () => {
    render(<Button label="primary" primary={true} />);
    expect(screen.getByTestId("icon-button")).toBeInTheDocument();
  });
  it("IconButton component is rendered", () => {
    render(<Button label="secondary" primary={false} />);
    expect(screen.getByTestId("icon-button")).toBeInTheDocument();
  });
  it("IconButton component is rendered", () => {
    render(<Button label="secondary" />);
    expect(screen.getByTestId("icon-button")).toBeInTheDocument();
  });

  it("Test click event", () => {
    const mockCallBack = jest.fn();
    render(<Button label="primary" primary={true} onClick={mockCallBack} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });
});
