/* eslint-disable import/prefer-default-export */
type Item = {
  id: string;
  name: string;
  price: number;
  image: string;
};

type Listener = () => void;

let items: Item[] = [];

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

  addItem(item: Item) {
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
