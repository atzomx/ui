import React from "react";
import { render, cleanup } from "../../test";
import Button from "./Button";

afterEach(() => {
  cleanup();
});

describe("Button render", () => {
  it("should render a Primary Button", () => {
    const { getByTestId } = render(
      <Button data-testid="button-id" variant="primary">
        Button
      </Button>
    );
    expect(getByTestId).not.toBeNull();
    const element = getByTestId("button-id");
    expect(element).toBeInTheDocument();
  });
});
