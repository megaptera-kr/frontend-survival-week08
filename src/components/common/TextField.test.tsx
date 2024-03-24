import renderWithProviders from '../../testHelper';
import TextField from './TextField';

test('TextField', () => {
  const id = 'test-input';
  const placeholder = 'Enter your text';
  const { getByPlaceholderText } = renderWithProviders(
    <TextField id={id} placeholder={placeholder} />,
  );
  const inputElement = getByPlaceholderText(placeholder);

  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveAttribute('id', id);
  expect(inputElement).toHaveAttribute('placeholder', placeholder);
  expect(inputElement).toHaveAttribute('type', 'text');
});
