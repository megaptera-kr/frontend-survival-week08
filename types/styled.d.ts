import 'styled-components';

import Theme from '../styles/Theme';

type Typography = {
  fontSize: React.CSSProperties['fontSize'];
  lineHeight: React.CSSProperties['lineHeight'];
  letterSpacing: React.CSSProperties['letterSpacing'];
  fontWeight: React.CSSProperties['fontWeight'];
};

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
