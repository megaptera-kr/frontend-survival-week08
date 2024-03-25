import { screen, fireEvent } from '@testing-library/react';

import Button from './Button';
import renderWithProviders from '../../testHelper';

describe('Button', () => {
  it('render with default type "button"', () => {
    renderWithProviders(<Button>Test Button</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('type', 'button');
  });

  it('call onClick prop when button is clicked', () => {
    const onClickMock = jest.fn();

    renderWithProviders(<Button onClick={onClickMock}>Test Button</Button>);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('render children correctly', () => {
    renderWithProviders(<Button>Test Button</Button>);

    const button = screen.getByText('Test Button');

    expect(button).toBeInTheDocument();
  });
});
