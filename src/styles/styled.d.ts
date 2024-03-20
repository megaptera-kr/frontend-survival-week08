import 'styled-components';

import CustomTheme from './Theme';

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
