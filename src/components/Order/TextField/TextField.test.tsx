import { render, screen } from '@testing-library/react';
import TextField from '.';

describe('TextField', () => {
  const label = 'labelText';
  const placeholder = 'placeholderText';

  beforeEach(() => {
    render(<TextField label={label} placeholder={placeholder} />);
  });

  it('renders label, input', () => {
    const labelText = screen.getByLabelText(label);
    const placeholderText = screen.getByPlaceholderText(placeholder);

    expect(labelText).toBeInTheDocument();
    expect(placeholderText).toBeInTheDocument();
  });
});
