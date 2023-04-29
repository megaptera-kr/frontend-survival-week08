import { css } from 'styled-components';

const typo = {
  regular16: () => css`
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.18751;
`,
  medium10: () => css`
    font-size: 1rem;
    font-weight: 500;
    line-height: 1;
  `,
  medium12: () => css`
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.1933;
  `,
  medium14: () => css`
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.1933;
  `,
  medium20: () => css`
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.1933;
  `,
  semibold16: () => css`
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.1875;
  `,
  semibold24: () => css`
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 1.1875;
  `,
  bold16: () => css`
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.1875;
  `,
  bold24: () => css`
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.06;
  `,
  bold40: () => css`
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.2;
  `,
  bold55: () => css`
    font-size: 5.5rem;
    font-weight: 700;
    line-height: 1.2727;
  `,
} as const;

export default typo;
