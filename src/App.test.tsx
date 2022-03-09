/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

beforeEach(() => {});

test("check wrapper className", () => {
  const { container } = render(<App />);
  expect(container.firstChild).toHaveClass("App");
});
