import BaseStore, { Listener } from './BaseStore';

describe('BaseStore', () => {
  type AnySnapshot = {
    obj: {
      id: number;
      name: string;
    };
  };

  let baseStore: BaseStore<AnySnapshot>;
  let listener1: Listener;
  let listener2: Listener;

  beforeEach(() => {
    baseStore = new BaseStore();
    listener1 = jest.fn();
    listener2 = jest.fn();
  });

  it('should add and remove listeners correctly', () => {
    baseStore.addListener(listener1);
    baseStore.addListener(listener2);

    expect(baseStore.getListener().size).toBe(2);

    baseStore.removeListener(listener1);

    expect(baseStore.getListener().size).toBe(1);
    expect(baseStore.getListener().has(listener1)).toBe(false);
    expect(baseStore.getListener().has(listener2)).toBe(true);
  });
});
