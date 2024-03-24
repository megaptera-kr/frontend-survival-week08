import Img from './Image';
import renderWithProviders from '../../testHelper';

test('Img', () => {
  const src = 'test-image.jpg';
  const alt = 'Test Image';
  const { getByAltText } = renderWithProviders(<Img src={src} alt={alt} />);
  const imgElement = getByAltText(alt);

  expect(imgElement).toBeInTheDocument();
  expect(imgElement).toHaveAttribute('src', src);
  expect(imgElement).toHaveAttribute('alt', alt);
});
