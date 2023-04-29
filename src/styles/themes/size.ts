import { css } from 'styled-components';

import breakPoint from './breakPoint';

const size = {
  header: {
    height: '70px',
  },
  filter: {
    height: '104px',
  },
  cart: {
    height: '324px',
  },
  container: () => css`
    position: relative;
    width: 100vw;
    margin: 0 auto;
    padding: 0 15px;

    @media ${breakPoint.desktop} {
      width: 100vw;
      max-width: 1080px;
    }
  `,
} as const;

export default size;
