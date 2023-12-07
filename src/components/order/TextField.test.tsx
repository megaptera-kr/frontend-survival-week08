import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import TextField from './TextField';
import defaultTheme from '../../styles/defaultTheme';

const context = describe;

describe('TextField', () => {
  const label = '검색';
  const placeholder = '식당 이름을 입력해주세요';

  const setFilterText = jest.fn();

  function renderTextField() {
    render(
      <ThemeProvider theme={defaultTheme}>
        <TextField label={label} placeholder={placeholder} filterText="" setFilterText={setFilterText} />
      </ThemeProvider>,
    );
  }

  it('render TextField', () => {
    renderTextField();
    screen.getByText(/검색/);
    screen.getByPlaceholderText(/식당 이름을 입력해주세요/);
  });

  context('user enters name', () => {
    it('calls "setText" handler', () => {
      renderTextField();

      fireEvent.change(screen.getByLabelText(label), {
        target: { value: 'New Name' },
      });

      expect(setFilterText).toBeCalledWith('New Name');
    });
  });
});
