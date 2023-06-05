// eslint-disable-next-line import/no-extraneous-dependencies
import 'whatwg-fetch';
import 'reflect-metadata';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Main from './main';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <StrictMode>
    <Main />
  </StrictMode>,
);
