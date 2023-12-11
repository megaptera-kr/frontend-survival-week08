import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import MenuItem from './MenuItem';

import defaultTheme from '../../styles/defaultTheme';

describe('MenuItem', () => {
  const item = {
    id: 'FOOD_04',
    image: '',
    name: '카레',
    price: 10_000,
  };

  const index = 1;
  const onDelete = jest.fn();

  function renderMenuItem() {
    render(
      <ThemeProvider theme={defaultTheme}>
        <MenuItem item={item} index={index} onDelete={onDelete} />
      </ThemeProvider>,
    );
  }
  it('render MenuItem', () => {
    renderMenuItem();
    screen.getByText('카레');
    screen.getByText('10,000원');
  });
});
