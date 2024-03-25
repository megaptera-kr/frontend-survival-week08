import Text from './Text';
import renderWithProviders from '../../testHelper';

test('Text', () => {
  const { container } = renderWithProviders(<Text />);
  const textElement = container.firstChild;

  expect(textElement).toHaveStyle(`
      user-select: none;
    `);
});
