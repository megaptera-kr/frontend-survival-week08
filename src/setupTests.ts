// eslint-disable-next-line import/no-extraneous-dependencies
import 'whatwg-fetch';
import 'reflect-metadata';

// window.matchMedia is not a function
// https://jestjs.io/docs/29.4/manual-mocks
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
