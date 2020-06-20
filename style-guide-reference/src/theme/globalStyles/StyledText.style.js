import styled, { css } from 'styled-components/native';
import { isAndroid, isIOS } from '../../src/utils/index.native';

/* This css add font logic to android platform for different type of font families
 *
 * For android
 * 1. fontFamily = font file name
 * 2. font file name should all be in lowercase
 * 3. font variation has to be added to font file name with _ in between
 * For example: fontFamily = montserrat_semibold
 *
 * For iOS - fontFamily = font name and specified font weight picks the appropriate font in app
 */

const androidFontStyles = css`
  ${props =>
    isAndroid() && props.fontWeight && props.fontFamily
      ? `
     font-family: ${props.theme.typography.androidFonts[props.fontFamily]}_${props.fontWeight};
     font-weight: normal;
     `
      : ''};
  ${props =>
    isAndroid() && (!props.fontWeight || props.fontWeight === 'regular') && props.fontFamily
      ? `
      font-family: ${props.theme.typography.androidFonts[props.fontFamily]};
      font-weight: normal;
      `
      : ''};
`;

const iosFontStyles = css`
  ${props =>
    isIOS() && props.fontWeight && props.fontFamily
      ? `
      font-family: ${props.theme.typography.iosFonts[props.fontFamily]}-${
          props.theme.typography.fontWeightsNames[props.fontWeight]
        };
      font-weight: ${props.theme.typography.fontWeights[props.fontWeight]};
     `
      : ''};
  ${props =>
    isIOS() && (!props.fontWeight || props.fontWeight === 'regular') && props.fontFamily
      ? `
      font-family: ${props.theme.typography.iosFonts[props.fontFamily]};
      font-weight: normal;
      `
      : ''};
`;

const StyledText = styled.Text`
  ${androidFontStyles}
  ${iosFontStyles}
`;

export { androidFontStyles, iosFontStyles, StyledText };
