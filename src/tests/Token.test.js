import { render, screen } from "@testing-library/react";
import Token from "../Components/Token/Token";
import { BrowserRouter } from "react-router-dom";

test("full app rendering/navigating", async () => {
  const token = {
    id: 1,
    num1: 123,
    num2: 456,
    title: "Binance",
    timeLeft: 59,
    percentage: 0,
  };
  render(<Token circleWidth={120} token={token} />, {
    wrapper: BrowserRouter,
  });
  const tokenElement = screen.getByTestId("token-1");
  expect(tokenElement).toBeInTheDocument();
  expect(tokenElement).toHaveTextContent("123");
  expect(tokenElement).toHaveTextContent("456");
  expect(tokenElement).toHaveTextContent("Binance");
});
