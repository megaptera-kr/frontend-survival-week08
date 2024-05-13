// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';

type Option = {
  path?:string;
}

export default function renderWithMemoryRouter(
  node:ReactNode,
  { path = '/' }: Option = {},
) {
  return render((
    <MemoryRouter initialEntries={[path]}>
      {node}
    </MemoryRouter>
  ));
}
