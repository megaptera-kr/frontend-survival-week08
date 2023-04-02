import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    colors: {
      background: string;
      searchBorder: string;
      text: string;
      cardBg: string;
      cardHoverBg: string;
      cardText: string;
      toggleBtnBoxBg: string;
      toggleBtnBg: string;
      toggleBtntext: string;
      foodCardBg: string;
      foodHoverBg: string;
      restaurantBg: string;
      restaurantTitle: string;
      border1: string;
      border2: string;
      orderNum: string;
    };
  }
}
