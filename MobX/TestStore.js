import { observable, computed, configure, action } from "mobx";

class TestStore {
  @observable counter = 0;
  timer = null;

  @computed
  get value() {
    return this.counter;
  }

  @computed
  get doubleValue() {
    return this.counter * 2;
  }
  start() {
    this.timer = setInterval(() => {
      this.increment();
    }, 1000);
  }

  @action
  increment() {
    this.counter++;
  }

  stop() {
    clearInterval(this.timer);
  }
}

export default TestStore;
