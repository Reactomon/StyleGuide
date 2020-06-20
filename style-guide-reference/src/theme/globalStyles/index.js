import { createGlobalStyle } from 'styled-components';
import globalStyles from './commonStyles';
import fontFaces from './fontFaces';

// eslint-disable-next-line no-unused-expressions
export default createGlobalStyle`
  ${fontFaces}
  ${globalStyles}
`;
