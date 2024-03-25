import LabelField from './LabelField';
import renderWithProviders from '../../testHelper';

test('LabelField', () => {
  const htmlFor = 'test-input';
  const { getByText } = renderWithProviders(
    <LabelField htmlFor={htmlFor}>Test Label</LabelField>,
  );
  const labelElement = getByText('Test Label');

  expect(labelElement).toBeInTheDocument();
  expect(labelElement).toHaveAttribute('for', htmlFor);
});
