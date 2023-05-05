import { TokenStore } from "../Store/TokensStore";
import binance from "../assets/logos/binance.png";

test("Tokens store should add token", () => {
  const store = new TokenStore();
  store.addToken(binance, "Binance", () => {});
  expect(store.tokens.length).toBe(1);
});
test("Should update timer", () => {
  const store = new TokenStore();
  store.addToken(1, binance, "Binance", () => {});
  store.updateTime(1);
  expect(store.tokens[0].time).toBe(1);
  expect(store.tokens[0].title).toBe("Binance");
  expect(!!store.tokens[0].num1).toBe(true);
  expect(!!store.tokens[0].num2).toBe(true);
});
