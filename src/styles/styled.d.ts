import 'styled-components';
import type Theme from '../theme/Theme';

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}