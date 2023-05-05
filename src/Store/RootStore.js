import { TokenStore } from "./TokensStore";
export class RootStore {
  constructor() {
    this.tokensStore = new TokenStore(this);
  }
}
