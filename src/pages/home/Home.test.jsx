/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

beforeEach(() => {});

test("check wrapper className", () => {
  const { container } = render(<Home />);
  expect(container.firstChild).toHaveClass("tableContainer");
});

test("check for home title", () => {
  render(<Home />);
  const title = "Answers List";
  const titleValue = screen.getByText(title);
  expect(titleValue).toHaveTextContent(title);
});
