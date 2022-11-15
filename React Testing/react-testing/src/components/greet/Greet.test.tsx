import { screen, render } from "@testing-library/react";
import Greet from ".";

test("Greet should say hello", () => {
  render(<Greet />);
  let textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});

test("Greet with name", () => {
  render(<Greet name="Mehmood" />);

  let textElement = screen.getByText(/mehmood/i);

  expect(textElement).toBeInTheDocument();
});
