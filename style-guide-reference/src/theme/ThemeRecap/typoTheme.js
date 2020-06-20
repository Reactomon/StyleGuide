/* THIS COMPONENT HAS BEEN DEPRECATED AND WILL BE REMOVED ON FUTURE RELEASE.
   PLEASE USE Heading, and BodyCopy from the core Atoms
*/

import styled from 'styled-components';
import { HeadingStyle, BodyStyle } from '../globalStyles/typography';
import theme from './index';

const { colors, fonts } = theme;
const HeadingFont = fonts.fontSize.heading;
const bodySizeText = fonts.fontSize.body.bodytext;

const getFontFamily = fontFamilyProp => {
  if (fontFamilyProp) {
    return fonts[fontFamilyProp];
  }
  return '';
};

const getFontWeight = fontWeightProp => {
  if (fontWeightProp) {
    return fonts.fontWeight[fontWeightProp];
  }
  return '';
};

const Heading = styled(HeadingStyle)`
  ${props => (props.fontFamily ? `font-family: ${getFontFamily(props.fontFamily)}` : '')};
  ${props => (props.fontWeight ? `font-weight: ${getFontWeight(props.fontWeight)}` : '')};
  ${props => (props.HeadingLarge === 'one' ? `font-size: ${HeadingFont.large.h1}px` : '')};
  ${props => (props.HeadingLarge === 'two' ? `font-size: ${HeadingFont.large.h2}px` : '')};
  ${props => (props.HeadingLarge === 'three' ? `font-size: ${HeadingFont.large.h3}px` : '')};
  ${props => (props.HeadingLarge === 'four' ? `font-size: ${HeadingFont.large.h4}px` : '')};
  ${props => (props.HeadingLarge === 'five' ? `font-size: ${HeadingFont.large.h5}px` : '')};
  ${props => (props.HeadingLarge === 'six' ? `font-size: ${HeadingFont.large.h6}px` : '')};

  ${props => (props.HeadingSmall === 'one' ? `font-size: ${HeadingFont.small.h1}px` : '')};
  ${props => (props.HeadingSmall === 'two' ? `font-size: ${HeadingFont.small.h2}px` : '')};
  ${props => (props.HeadingSmall === 'three' ? `font-size: ${HeadingFont.small.h3}px` : '')};
  ${props => (props.HeadingSmall === 'four' ? `font-size: ${HeadingFont.small.h4}px` : '')};
  ${props => (props.HeadingSmall === 'five' ? `font-size: ${HeadingFont.small.h5}px` : '')};
  ${props => (props.HeadingSmall === 'six' ? `font-size: ${HeadingFont.small.h6}px` : '')};
  ${props => (props.HeadingcolorLg === 'primary' ? `color: ${colors.PRIMARY.DARK};` : '')};
  ${props => (props.HeadingcolorLg === 'secondary' ? `color: ${colors.PRIMARY.BLUE};` : '')};
  ${props => (props.HeadingcolorLg === 'tertiary' ? `color: ${colors.PRIMARY.GREEN};` : '')};
  ${props => (props.HeadingcolorSm === 'primary' ? `color: ${colors.PRIMARY.DARK};` : '')};
  ${props => (props.HeadingcolorSm === 'secondary' ? `color: ${colors.PRIMARY.BLUE};` : '')};
  ${props => (props.HeadingcolorSm === 'tertiary' ? `color: ${colors.PRIMARY.GREEN};` : '')};
`;

const BodyCopy = styled(BodyStyle)`
  ${props => (props.fontFamily ? `font-family: ${getFontFamily(props.fontFamily)}` : '')};
  ${props => (props.fontWeight ? `font-weight: ${getFontWeight(props.fontWeight)}` : '')};
  ${props => (props.bodySize === 'one' ? `font-size: ${bodySizeText.copy1}px` : '')};
  ${props => (props.bodySize === 'two' ? `font-size: ${bodySizeText.copy2}px` : '')};
  ${props => (props.bodySize === 'three' ? `font-size: ${bodySizeText.copy3}px` : '')};
  ${props => (props.bodySize === 'four' ? `font-size: ${bodySizeText.copy4}px` : '')};
  ${props => (props.bodySize === 'five' ? `font-size: ${bodySizeText.copy5}px` : '')};
  ${props => (props.bodySize === 'six' ? `font-size: ${bodySizeText.copy6}px` : '')};
  ${props => (props.bodySize === 'seven' ? `font-size: ${bodySizeText.copy7}px` : '')};
  ${props => (props.bodySize === 'eight' ? `font-size: ${bodySizeText.copy8}px` : '')};
  ${props => (props.bodySize === 'nine' ? `font-size: ${bodySizeText.copy9}px` : '')};
  ${props => (props.bodySize === 'ten' ? `font-size: ${bodySizeText.copy10}px` : '')};
  ${props => (props.bodySize === 'eleven' ? `font-size: ${bodySizeText.copy11}px` : '')};
  ${props => (props.bodySize === 'twelve' ? `font-size: ${bodySizeText.copy12}px` : '')};
  ${props => (props.bodySize === 'thirteen' ? `font-size: ${bodySizeText.copy13}px` : '')};
  ${props => (!props.bodySize ? `font-size: ${bodySizeText.copy3}px` : '')};
  ${props =>
    props.bodySizeSm === 'one' ? `font-size: ${fonts.fontSize.body.small.primary}px` : ''};
  ${props =>
    props.bodySizeSm === 'two' ? `font-size: ${fonts.fontSize.body.small.secondary}px` : ''};
  ${props =>
    props.bodySizeSm === 'three' ? `font-size: ${fonts.fontSize.body.small.tertiary}px` : ''};
  ${props => (props.bodyColor === 'white' ? `color: ${colors.WHITE};` : '')};
  ${props => (props.bodyColor === 'darkGray' ? `color: ${colors.TEXT.DARKGRAY};` : '')};
  ${props => !props.bodyColor && `color: ${colors.PRIMARY.BLUE};`};
  ${props => (props.BodycolorLg === 'primary' ? `color: ${colors.PRIMARY.DARK};` : '')};
  ${props => (props.BodycolorLg === 'secondary' ? `color: ${colors.PRIMARY.BLUE};` : '')};
  ${props => (props.BodycolorLg === 'tertiary' ? `color: ${colors.PRIMARY.GREEN};` : '')};
  ${props => (props.BodycolorLg === 'primary' ? `color: ${colors.PRIMARY.DARK};` : '')};
  ${props => (props.BodycolorLg === 'secondary' ? `color: ${colors.PRIMARY.BLUE};` : '')};
  ${props => (props.BodycolorLg === 'tertiary' ? `color: ${colors.PRIMARY.GREEN};` : '')};

  ${props => (!props.color ? `color: ${colors.PRIMARY.DARK};` : '')};
  ${props => (props.color === 'primary' ? `color: ${colors.PRIMARY.DARK};` : '')};
  ${props => (props.color === 'secondary' ? `color: ${colors.PRIMARY.BLUE};` : '')};
  ${props => (props.color === 'tertiary' ? `color: ${colors.PRIMARY.GREEN};` : '')};
`;

export { Heading, BodyCopy };
