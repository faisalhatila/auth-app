import { render, screen } from "@testing-library/react";
import Tokens from "../Pages/Tokens/Tokens";
import { BrowserRouter } from "react-router-dom";

test("full app rendering/navigating", async () => {
  render(<Tokens />, { wrapper: BrowserRouter });
  const tokensElement = screen.getByTestId("tokens");
  expect(tokensElement).toBeInTheDocument();
});
test("Render Component When No Items In Store", async () => {
  render(<Tokens />, { wrapper: BrowserRouter });
  const tokensElement = screen.getByTestId("no-data");
  expect(tokensElement).toBeInTheDocument();
});
