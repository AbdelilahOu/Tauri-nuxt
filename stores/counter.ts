import { defineStore } from "pinia";

export const useCounterStore = defineStore("counterStore", {
  state: () => {
    return {
      counter: 0,
    };
  },
  actions: {
    updateCounter: function (value: number) {
      this.counter += value;
    },
  },
});
