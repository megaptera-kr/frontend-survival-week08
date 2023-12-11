import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import ItemInfo from './ItemInfo';
import defaultTheme from '../../styles/defaultTheme';

describe('ItemInfo', () => {
  it('render ItemInfo', () => {
    const menuCount = 2;
    const calcTotalPrice = 10000;
    render(
      <ThemeProvider theme={defaultTheme}>
        <ItemInfo menuCount={menuCount} calcTotalPrice={calcTotalPrice} />
      </ThemeProvider>,
    );
    screen.getByText('주문내역');
    screen.getByText('2개');
    screen.queryByText('총 결제 예상금액 10,000원');
  });
});
