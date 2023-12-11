import { DefaultTheme } from 'styled-components';

import typography from './typography';

import sizes from './sizes';

const darkTheme: DefaultTheme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    background: '#1E1E1E',

    defaultText: '#FFFFFF',

    switchBackground: '#3A3A3A',
    switchActive: '#1E1E1E',

    introCardBackground: '#3A3A3A',
    introCardHover: '#FF8400',

    inputBorder: '#FF8400',
    inputText: '#FFFFFF',

    selectedButtonBackground: '#3A3A3A',
    selectedButtonText: '#FF8400',

    listBackground: '#3A3A3A',
    listBorder: '#F4F4F4',

    menuBackground: '#1E1E1E',

    menuHoverBackground: '#1E1E1E',
    menuHoverBorder: '#FF8400',

    cartBackground: '#1E1E1E',

    countChip: '#FF8400',

    buttonPrimaryBackground: '#FF8400',
    buttonPrimaryHoverBackground: '#D87000',
    buttonPrimaryText: '#FFFFFF',

    buttonSecondaryBackground: '#44272B',
    buttonSecondaryHoverBackground: '#170A0C',
    buttonSecondaryText: '#FFFFFF',

    orderCardBackground: '#3A3A3A',
    orderCardTitle: '#FFFFFF',
    orderCardPrice: '#FF8400',
    orderCardIcon: '#FFFFFF',

    orderCompleteBackground: '#3A3A3A',
    orderCompleteTitleBorder: '#FFFFFF',
    orderCompleteListBorder: '#555555',
    orderID: '#CECECE',

    orderCompleteTotalPrice: '#FF8400',
  },

  typography,
  sizes,
};

export default darkTheme;
