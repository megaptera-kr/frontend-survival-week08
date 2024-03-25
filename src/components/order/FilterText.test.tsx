import { screen, fireEvent } from '@testing-library/react';

import FilterText from './FilterText';
import renderWithProviders from '../../testHelper';

const context = describe;

describe('FilterText', () => {
  const setFilterTextMock = jest.fn();

  context('render', () => {
    it('label 과 placeholder 가 올바르게 보인다.', () => {
      renderWithProviders(<FilterText setFilterText={setFilterTextMock} />);

      screen.getByPlaceholderText('식당 이름을 입력해주세요');
    });
  });

  context('calls setSearchText when input changes', () => {
    it('입력한 값으로 함수가 호출된다.', () => {
      renderWithProviders(<FilterText setFilterText={setFilterTextMock} />);

      const input = screen.getByPlaceholderText('식당 이름을 입력해주세요');
      const inputValue = 'Test input value';

      fireEvent.change(input, { target: { value: inputValue } });

      expect(setFilterTextMock).toHaveBeenCalledWith(inputValue);
    });
  });
});
