import styled from 'styled-components';

import { useDarkMode } from 'usehooks-ts';

import Icon from '../../../static/icons/logo.svg';

import { Switch, Typography } from '../../atoms';

import Slider from '../../atoms/Switch/Slider';

const HeaderWrraper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 2rem;
  padding: 5rem 3rem 3rem 3rem;
`;

const HeaderTypography = styled(Typography)`
  margin-right: auto;
  color: ${({ theme }) => theme.colors.white};
`;

const RelativeTypography = styled(Typography)`
  display: inline-block;
  position: relative;
  width: 50%;
  z-index: 2;
`;

export default function Header() {
  const { isDarkMode, toggle } = useDarkMode();

  return (
    <HeaderWrraper>
      <Icon color='white' width='8rem' />
      <HeaderTypography $variant='heading_01'>
        메가테라 푸드코트 키오스크
      </HeaderTypography>

      <Switch $active={isDarkMode} onClick={toggle}>
        <Slider />
        <RelativeTypography $as='p' $variant='caption'>
          밝게
        </RelativeTypography>
        <RelativeTypography $as='p' $variant='caption'>
          어둡게
        </RelativeTypography>
      </Switch>
    </HeaderWrraper>
  );
}
