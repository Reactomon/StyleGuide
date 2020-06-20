import createThemeColorPalette from '../createThemeColorsPalette';
import createThemeTypography from '../createThemeTypography';
import colors from './colors';
import green from '../colors/green';
import blue from '../colors/blue';
import yellow from '../colors/yellow';
import fonts from './fonts';
import spacing from './spacing';
import gridDimensions from './gridDimensions';
import zindex from './zIndex';
import { mediaQuery, breakpoints } from './mediaQuery';

import opacity from './opacity';

const colorPalette = createThemeColorPalette();
const typography = createThemeTypography();

const theme = {
  brand: 'recap',
  /* add required colors other than default as per theme requirement */
  colorPalette: { ...colorPalette, green, blue, yellow },
  /* colors object has been deprecated and, will be removed in the future release.
   Please use colorPalette instead */
  colors,
  typography,
  /* fonts object has been deprecated and, will be removed in the future release.
   Please use typography instead */
  fonts,
  mediaQuery,
  breakpoints,
  zindex,
  gridDimensions,
  opacity,
  spacing,
};

export default theme;
