import Paragraph from './Paragraph';
import renderWithProviders from '../../testHelper';

test('Paragraph', () => {
  const { container } = renderWithProviders(<Paragraph />);
  const paragraphElement = container.firstChild;

  expect(paragraphElement).toHaveStyle(`
      font-size: 4.2rem;
      text-align: center;
      font-style: italic;
      padding-top: 60px;
      padding-bottom: 60px;
      width: 100%;
    `);
});
