import Theme from './Theme';

const darkTheme: Theme = {
  sizes: {
    basicWidth: '1080px',
    basicHeight: 'auto',
    bgBorderRadious: '0px 80px 0px 0px',
  },
  colors: {
    /* common */
    background: '#1E1E1E',
    primarytext: '#FFFFFF',
    secondarytext: '#FFFFFF',
    thirdtext: '#FF8400',
    /* header */
    searchBarBorder: '#FF8400',
    searchBarText: '#FFFFFF',
    /* intro */
    orderTypeCard: '#3A3A3A',
    selectedOrderTypeCardBackground: '#3A3A3A',
    selectedOrderTypeCardBorder: '3px solid #FF8400',
    /* order */
    menuListBackground: '#3A3A3A',
    selectedCategoryBackground: '#3A3A3A',
    selectedCategoryText: '#FF8400',
    menuCard: '#1E1E1E',
    selectedMenuCardBackground: '#1E1E1E',
    selectedMenuCardBorder: '#FF8400',
    divideMenu: '#555555',
    cartlist: '#1E1E1E',
    cartItemBackground: '#3A3A3A',
    cartItemPriceText: '#FF8400',
    cancleButton: '#170A0C',
    orderButton: '#FF8400',
    clickedCancleButton: '#44272B',
    clickedOrderButton: '#D87000',
    /* order complete */
    receiptBackground: '#3A3A3A',
    orderNumber: '#CECECE',
    divideOrderNumber: '#FFFFFF',
    divideOrderList: '#555555',
    totalPrice: '#FF8400',
    goBackToMainButtonBackground: '#FF8400',
    goBackToMainButton: '#FFFFFF',
  },
};

export default darkTheme;
