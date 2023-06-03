import 'styled-components';
import Theme from './type/Theme';
​
declare module 'styled-components' {
 export interface DefaultTheme extends Theme {}
}