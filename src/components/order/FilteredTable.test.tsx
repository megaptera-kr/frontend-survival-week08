import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import FilteredTable from './FilteredTable';
import fixtures from '../../fixtures';
import defaultTheme from '../../styles/defaultTheme';

describe('FilteredTable', () => {
  const { restaurants } = fixtures;
  function renderFilteredTable() {
    render(
      <ThemeProvider theme={defaultTheme}>
        <FilteredTable data={restaurants} />
      </ThemeProvider>,
    );
  }

  it('render FilteredTable', () => {
    renderFilteredTable();
    screen.getByText('메가반점');
    screen.getByText('짬뽕');
    screen.getByText('8,000원');
  });
});
