import { action, computed, makeObservable, observable } from "mobx";
export class TokenStore {
  tokens = [];

  constructor(rootStore) {
    makeObservable(this, {
      tokens: observable,
      getTokens: computed,
      updateTime: action,
      addToken: action,
    });
    this.rootStore = rootStore;
  }

  get getTokens() {
    return this.tokens;
  }
  updateTime = (id) => {
    const tempTokens = [...this.tokens];
    const index = tempTokens.findIndex((el) => el.id === id);
    if (tempTokens[index].time < 59) {
      tempTokens[index].time = tempTokens[index].time + 1;
      tempTokens[index].timeLeft = tempTokens[index].timeLeft - 1;
    } else {
      tempTokens[index].time = 0;
      tempTokens[index].timeLeft = 59;
      tempTokens[index].num1 = Math.floor(
        Math.random() * (999 - 100 + 1) + 100
      );
      tempTokens[index].num2 = Math.floor(
        Math.random() * (999 - 100 + 1) + 100
      );
    }
    this.tokens = tempTokens;
  };
  addToken = (id, icon, title, navigate) => {
    const tempTokens = [...this.tokens];
    const tempObj = {
      id,
      img: icon,
      time: 0,
      title,
      timeLeft: 59,
      num1: Math.floor(Math.random() * (999 - 100 + 1) + 100),
      num2: Math.floor(Math.random() * (999 - 100 + 1) + 100),
    };
    tempTokens.push(tempObj);
    this.tokens = tempTokens;
    navigate?.("/");
  };
}
