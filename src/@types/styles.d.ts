// d - arquivos de definição de tipos no typescript, sem javascript
// necessita ser feito quando utilizamos styled-components
import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}