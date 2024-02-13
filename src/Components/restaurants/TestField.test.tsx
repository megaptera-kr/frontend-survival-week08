import { fireEvent, render, screen } from '@testing-library/react';

import TextField from './TextField';

import TestProvider from '../../hooks/TestProvider';

const context = describe;
describe('TextField', () => {
  const query = '메가';
  const setQuery = jest.fn();

  context('render TextFiled', () => {
    it('query value is displayed', () => {
      render(
        <TestProvider>
          <TextField query={query} setQuery={setQuery} />
        </TestProvider>,
      );
      const input = screen.getByLabelText(/검색/) as HTMLInputElement;
      expect(input?.value).toBe(query);
    });
  });

  context('query value Change', () => {
    it('The changed values ​​appear as query values', () => {
      render(
        <TestProvider>
          <TextField query={query} setQuery={setQuery} />
        </TestProvider>,
      );
      const input = screen.getByLabelText(/검색/) as HTMLInputElement;
      expect(input.value).toBe(query);
      const newQuery = '변경';
      fireEvent.change(input, { target: { value: newQuery } });
      expect(setQuery).toBeCalledWith(newQuery);
    });
  });
});
