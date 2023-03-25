import Theme from './Theme';

const darkTheme: Theme = {
  sizes: {
    basicWidth: '1080px',
    basicHeight: 'auto',
  },
  colors: {
    /* common */
    background: '#1E1E1E',
    primarytext: '#FFFFFF',
    secondarytext: '#FFFFFF',
    thirdtext: '#FF8400',
    /* intro */
    orderTypeCard: '#3A3A3A',
    selectedOrderTypeCard: '#FF8400',
    /* order */
    menuListBackground: '#3A3A3A',
    selectedCategoryBackground: '#3A3A3A',
    selectedCategoryText: '#FF8400',
    menuCard: '#1E1E1E',
    selectedMenuCardBackground: '#1E1E1E',
    selectedMenuCardBorder: '#FF8400',
    divideMenu: '#555555',
    orderlist: '#1E1E1E',
    cancleButton: '#170A0C',
    orderButton: '#FF8400',
    clickedCancleButton: '#44272B',
    clickedOrderButton: '#D87000',
    /* order complete */
    completeCheck: '#FF8400',
    orderNumber: '#CECECE',
    divideOrderList: '#FFFFFF',
    totalPrice: '#FF8400',
    goBackToMainButton: '#FF8400',
  },
};

export default darkTheme;
