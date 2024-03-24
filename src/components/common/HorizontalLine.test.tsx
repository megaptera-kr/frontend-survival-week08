import HorizontalLine from './HorizontalLine';
import renderWithProviders from '../../testHelper';

test('HorizontalLine', () => {
  const { container } = renderWithProviders(<HorizontalLine />);
  const horizontalLine = container.firstChild;
  expect(horizontalLine).toHaveStyle(`
      opacity: 50%;
      width: 100%;
      height: 2px;
      margin-top: 2.6rem;
      margin-bottom: 1.6rem;
    `);
});
