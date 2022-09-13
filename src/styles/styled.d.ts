import 'styled-components';
// import theme from './theme';
import light from './themes/light';

export type Theme = typeof light;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
