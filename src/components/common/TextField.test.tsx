/* eslint-disable comma-dangle */
import { fireEvent, screen } from '@testing-library/react';

import { renderWithProviders } from '../../testHelper';

import TextField from './TextField';

const context = describe;

describe('TextField', () => {
  const text = '메가';
  const placeholder = '식당이름을 입력해주세요.';
  const setText = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderTextField() {
    renderWithProviders(
      <TextField
        label="검색"
        placeholder={placeholder}
        text={text}
        setText={setText}
      />
    );
  }

  it('renders elements', () => {
    renderTextField();
    screen.getByPlaceholderText(/식당이름을/);
    screen.getByDisplayValue(text);
  });

  context('when user enters name', () => {
    it('calls “setText” handle', () => {
      renderTextField();

      fireEvent.change(screen.getByPlaceholderText(/식당이름을/), {
        target: { value: '메가반점' },
      });

      expect(setText).toBeCalledWith('메가반점');
    });
  });
});
