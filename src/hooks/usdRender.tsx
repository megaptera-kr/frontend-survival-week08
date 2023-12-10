// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import TestTemplate from '../components/common/TestTemplate/TestTemplate';

const useRender = (children: JSX.Element | JSX.Element[]) => (
  render(<TestTemplate>{children}</TestTemplate>)
);

export default useRender;
