import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Components/Header/Header";
import { BrowserRouter } from "react-router-dom";

test("full app rendering/navigating", async () => {
  render(<Header />, { wrapper: BrowserRouter });
  const headerElement = screen.getByTestId("headers");
  expect(headerElement).toBeInTheDocument();
});
