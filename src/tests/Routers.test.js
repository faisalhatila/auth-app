import { render, screen, cleanup } from "@testing-library/react";
import Tokens from "../Pages/Tokens/Tokens";
import Router from "..//Routers";
test("Should render Tokens Component", () => {
  render(<Router />);
  expect(true).toBe(true);
});
