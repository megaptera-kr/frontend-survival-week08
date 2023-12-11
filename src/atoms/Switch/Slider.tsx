import styled from 'styled-components';

import { SliderProps } from './types';

import useSwitchContext from './useSwitchContext';

const SliderContainer = styled.div<SliderProps>`
  width: 50%;
  height: 5.12rem;
  background-color: ${({ theme }) => theme.colors.switchActive};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${({ $active }) => ($active ? 'calc(50% - 0.64rem)' : '0.64rem')};
  border-radius: 3rem;
  transition: left 0.2s;
  z-index: 1;
`;

function Slider() {
  const { isOn } = useSwitchContext();

  return <SliderContainer $active={isOn} />;
}

export default Slider;
