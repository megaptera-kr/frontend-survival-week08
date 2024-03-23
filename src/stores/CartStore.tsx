/* eslint-disable import/prefer-default-export */
import Food from '../types/Food';

type Listener = () => void;

let items: Food[] = [];

let listeners: Listener[] = [];

function publish() {
  listeners.forEach((listener) => {
    listener();
  });
}

export const CartStore = {
  subscribe(listener: Listener) {
    listeners = [...listeners, listener];

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },

  getSnapshot() {
    return items;
  },

  addItem(item: Food) {
    items = [...items, item];
    publish();
  },

  removeItem(index: number) {
    const filterItems = items.filter((_, i) => i !== index);
    items = filterItems;
    publish();
  },

  resetAllItems() {
    items = [];
    publish();
  },
};
