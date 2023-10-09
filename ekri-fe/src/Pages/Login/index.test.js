import { render, screen } from "@testing-library/react";
import Login from "./index";

test("renders learn react link", () => {
  render(<Login />);
  const linkElement = screen.getByText(/Login form/i);
  expect(linkElement).toBeInTheDocument();
});
