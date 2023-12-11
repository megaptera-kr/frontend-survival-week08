import 'styled-components';

import typography from '../theme/typography';

import colors from '../theme/colors';

import sizes from '../theme/sizes';

type Sizes = typeof sizes;
type Typography = typeof typography;
type Colors = typeof colors;

declare module 'styled-components' {
  export interface DefaultTheme {
    typography: Typography;
    sizes: Sizes;
    colors: Colors;
  }
}
