import { fireEvent, render, screen } from '@testing-library/react';
import TextField from '.';

const context = describe;
describe('TextField', () => {
  const label = 'labelText';
  const placeholder = 'placeholderText';
  const filterText = '';
  const setFilterText = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    render(<TextField
      label={label}
      placeholder={placeholder}
      filterText={filterText}
      setFilterText={setFilterText}
    />);
  });

  it('renders label, input', () => {
    const labelText = screen.getByLabelText(label);
    const placeholderText = screen.getByPlaceholderText(placeholder);

    expect(labelText).toBeInTheDocument();
    expect(placeholderText).toBeInTheDocument();
  });

  context('if user enters with value', () => {
    it('setFilterText function will be called with the value', () => {
      const input = screen.getByLabelText(label);
      fireEvent.change(input, { target: { value: 'user events' } });

      expect(setFilterText).toHaveBeenCalledWith('user events');
    });
  });
});
