import { fireEvent, render, screen } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  const active = 'primary';
  const text = '버튼 이름';
  const onClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('listens for click events', () => {
    render(<Button text={text} active={active} onClick={onClick} />);

    screen.getByText(text);
    fireEvent.click(screen.getByText(text));

    expect(onClick).toBeCalled();
  });
});
