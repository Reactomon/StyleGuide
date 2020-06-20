import { css } from 'styled-components';

const AnchorStyles = css`
  font-family: ${props => props.theme.fonts.secondaryFontFamily};
  color: inherit;

  ${props =>
    props.anchorVariation === 'primary'
      ? `
      color: ${props.theme.colors.ANCHOR.PRIMARY};
    `
      : ''};
  ${props =>
    props.anchorVariation === 'secondary'
      ? `
      color: ${props.theme.colors.ANCHOR.SECONDARY};
    `
      : ''};
  ${props =>
    props.anchorVariation === 'tertiary'
      ? `
      color: ${props.theme.colors.ANCHOR.TERTIARY};
    `
      : ''};
  ${props =>
    props.anchorVariation === 'grayed'
      ? `
      color: ${props.theme.colors.ANCHOR.GRAYED};
    `
      : ''};
  ${props =>
    props.anchorVariation === 'white'
      ? `
      color: ${props.theme.colors.WHITE};
    `
      : ''};
  ${props =>
    props.fontSizeVariation === 'small'
      ? `
      font-size: ${props.theme.fonts.fontSize.anchor.small}px;
    `
      : ''};
  ${props =>
    props.fontSizeVariation === 'medium'
      ? `
      font-size: ${props.theme.fonts.fontSize.anchor.medium}px;
    `
      : ''};
  ${props =>
    props.fontSizeVariation === 'large'
      ? `
      font-size: ${props.theme.fonts.fontSize.anchor.large}px;
    `
      : ''};
  ${props =>
    props.fontSizeVariation === 'xlarge'
      ? `
          font-size: ${props.theme.fonts.fontSize.anchor.xlarge}px;
        `
      : ''};
  ${props =>
    props.fontWeightVariation === 'active'
      ? `
      font-weight: ${props.theme.fonts.fontWeight.bold};
    `
      : ''};
  ${props =>
    props.fontWeight === 'semiBold'
      ? `
      font-weight: ${props.theme.fonts.fontWeight.semiBold};
    `
      : ''};
  ${props =>
    props.fullWidth
      ? `
      width: 100%;
    `
      : ''};
  ${props =>
    props.underline
      ? `
      text-decoration: underline;
    `
      : 'text-decoration: none;'};
  ${props =>
    props.centered
      ? `
      text-align: center;
    `
      : ''};
  ${props =>
    props.anchorVariation === 'button'
      ? `
    box-sizing: border-box;
    display: inline-block;
  `
      : ''};
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};

  .left-arrow {
    border: solid ${props => props.theme.colors.ANCHOR.SECONDARY};
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 5px;
    transform: rotate(135deg);
  }
`;

export default AnchorStyles;
