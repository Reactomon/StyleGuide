import { css } from 'styled-components';

const darkLinkCategory = 'category-links-dark';

const getShape = props => {
  const {
    theme: { isGymboree },
    noCurve,
    noCurveMobile,
  } = props;

  if (isGymboree && noCurveMobile) {
    return `
    border-radius: 25.5px;
    @media ${props.theme.mediaQuery.smallOnly} {
      border-radius: 0;
    }`;
  }
  if (isGymboree && !noCurve) {
    return `border-radius: 25.5px;`;
  }
  return ``;
};

const checkHover = props => {
  return props.nohover
    ? ''
    : `&:hover {
    border-bottom: 2px solid
     ${
       props.theme.isGymboree
         ? props.theme.colorPalette.primary.main
         : props.theme.colors.ANCHOR.SECONDARY
     };
     padding-bottom: ${!props.nohover ? '4px' : ''};
     text-decoration: none;
     border-radius: 0;
   }`;
};

const ButtonStyles = css`
  border: none;
  border-radius: 0;
  background: none;
  position: relative;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? props.theme.opacity.opacity.medium : '1')};
  text-transform: uppercase;
  min-height: 42px;
  letter-spacing: 0.93px;
  font-size: ${props => props.theme.typography.fontSizes.fs13};
  color: ${props => props.theme.colorPalette.gray['900']}
  ${props =>
    !props.link
      ? `@media ${props.theme.mediaQuery.large} {
    letter-spacing: 1px;
    }`
      : ''}
  ${props =>
    props.buttonVariation === 'fixed-width'
      ? `
      min-width: 40px;
      background: ${props.theme.colors.BUTTON[props.fill || 'WHITE'].NORMAL};
      color: ${props.theme.colorPalette.BUTTON[props.fill || 'WHITE'].TEXT};
      font-family: ${props.theme.typography.fonts.secondary};
      font-weight: ${props.theme.typography.fontWeights.extrabold};
      border: 1px solid ${props.theme.colorPalette.BUTTON[props.fill || 'WHITE'].BORDER};
      padding: 11px 20px;
      width: 100%;
      &:hover, &:focus {
        border: solid 1px ${
          props.fill === 'RED'
            ? props.theme.colorPalette.red[500]
            : props.theme.colorPalette.gray[600]
        };
        background-color: ${props.theme.colors.BUTTON[props.fill || 'WHITE'].HOVER};
      }
    `
      : ''};
  ${props =>
    props.buttonVariation === 'variable-width'
      ? `
      min-width: 64px;
      background: ${props.theme.colors.BUTTON[props.fill || 'WHITE'].NORMAL};
      color: ${props.theme.colorPalette.BUTTON[props.fill || 'WHITE'].TEXT};
      font-family: ${props.theme.fonts.secondaryFontFamily};
      font-weight: ${props.theme.fonts.fontWeight.black};
      border: 1px solid ${props.theme.colorPalette.BUTTON[props.fill || 'WHITE'].BORDER};
      padding: 11px 32px;
      &:hover{
        border: solid 1px #9b9b9b;
        background-color: ${props.theme.colors.BUTTON[props.fill || 'WHITE'].HOVER};
      }
    `
      : ''};

  ${props =>
    props.buttonVariation === 'category-links-light'
      ? `
      min-height: auto;
      color: ${props.theme.colorPalette.text.primary};
      font-family: ${props.theme.typography.fonts.secondary};
      font-size: ${props.theme.typography.fontSizes.fs14};
      font-weight: ${props.theme.typography.fontWeights.regular};
      border-bottom: 2px solid ${props.theme.colorPalette.primary.main};
      margin-right: 16px;
      padding-bottom: 3px;
    `
      : ''};

  ${props =>
    props.buttonVariation === darkLinkCategory
      ? `
      min-height: auto;
      color: ${props.theme.colorPalette.white};
      font-family: ${props.theme.typography.fonts.secondary};
      font-size: ${props.theme.typography.fontSizes.fs14};
      font-weight: ${props.theme.typography.fontWeights.regular};
      border-bottom: 2px solid ${props.theme.colorPalette.text.hint};
      padding-bottom: 3px;
    `
      : ''};

  &:focus {
    background: ${props => props.theme.colors.BUTTON[props.fill || 'WHITE'].FOCUS};
  }
  &:hover:not[disabled] {
    background: ${props => props.theme.colors.BUTTON[props.fill || 'WHITE'].HOVER};
  }

  ${props =>
    props.buttonVariation === 'category-links-light' || props.buttonVariation === darkLinkCategory
      ? `
      &:hover, &:focus {
        background: none;
        font-weight: ${props.theme.typography.fontWeights.semibold}
        border-color: ${props.theme.colorPalette.orange[800]};
      }
      &:hover, &:focus {
        background: none;
        font-weight: ${props.theme.typography.fontWeights.semibold}
        border-color: ${props.theme.colorPalette.orange[800]};
      }

      /* fixes button flickering on the hover because for font-weight */
      ::after {
        font-family: ${props.theme.typography.fonts.secondary};
        font-weight: ${props.theme.typography.fontWeights.semibold}
        font-size: ${props.theme.typography.fontSizes.fs14};
        display: block;
        content: attr(data-category-link-label);
        height: 0;
        overflow: hidden;
        visibility: hidden;
      }

      @media ${props.theme.mediaQuery.large} {
      font-size: ${props.theme.typography.fontSizes.fs20};
      ::after {
          font-size: ${props.theme.typography.fontSizes.fs20};
        }
      }
    `
      : ''};

  ${props =>
    props.fullWidth
      ? `
      width: 100% ;
    `
      : ''};

  ${props =>
    props.customStyle === 'shadow-button'
      ? `
      background: ${props.theme.colors.PRIMARY.PALEGRAY};
      border-radius: 10px;
      padding: 4px 0;

      border: 2px solid ${props.theme.colors.PRIMARY.LIGHTGRAY};
      box-shadow: 4px 4px white inset, 6px 6px ${props.theme.colors.PRIMARY.PALEGRAY};
      width: calc(100% - 6px);
      &:hover, &:focus, &:hover:not([disabled]) {
        background: ${
          props.theme.isGymboree
            ? props.theme.colorPalette.orange[50]
            : props.theme.colors.PRIMARY.COLOR1
        };
        box-shadow: 4px 4px white inset, 6px 6px ${
          props.theme.isGymboree
            ? props.theme.colorPalette.orange[800]
            : props.theme.colors.PRIMARY.COLOR1
        };
        border: 2px solid ${props.theme.colors.PRIMARY.GRAY};
      }
      @media ${props.theme.mediaQuery.large} {
        padding: 11px 0;
        box-shadow: 10px 10px white inset, 12px 12px ${props.theme.colors.PRIMARY.PALEGRAY};
        width: calc(100% - 12px);
        &:hover, &:focus, &:hover:not([disabled]) {
          box-shadow: 10px 10px white inset, 12px 12px ${
            props.theme.isGymboree
              ? props.theme.colorPalette.orange[50]
              : props.theme.colors.PRIMARY.COLOR1
          };
        }
      }
    `
      : ''};

  ${props =>
    props.buttonVariation === 'mini-nav'
      ? `
        color: ${props.theme.colorPalette.gray['900']};
        padding: 0;
        font-family: ${props.theme.fonts.secondaryFontFamily};
        font-size: ${props.theme.typography.fontSizes.fs14};
        font-weight: ${
          props.active
            ? props.theme.typography.fontWeights.semibold
            : props.theme.typography.fontWeights.normal
        };
        border-bottom: 2px solid ${
          props.active ? props.theme.colorPalette.primary.main : 'transparent'
        };
        letter-spacing: normal;
        padding: 0 5px;
        min-height: 24px;

        &:hover, &:focus, &:active {
          background-color: transparent;
          outline-width: 0;
        }

        @media ${props.theme.mediaQuery.large} {
          font-size: ${props.theme.typography.fontSizes.fs20};
          font-weight: ${
            props.active
              ? props.theme.typography.fontWeights.semibold
              : props.theme.typography.fontWeights.normal
          };
        }
      `
      : ''}

  @media ${props => props.theme.mediaQuery.large} {
    ${props =>
      props.buttonVariation === 'fixed-width'
        ? `padding: 15px 20px;font-size: ${props.theme.typography.fontSizes.fs14}`
        : ''};
    ${props =>
      props.buttonVariation === 'variable-width'
        ? `padding: 15px 32px;font-size: ${props.theme.typography.fontSizes.fs14}`
        : ''};
  }
  ${props =>
    props.theme.isGymboree &&
    props.buttonVariation !== 'mini-nav' &&
    props.buttonVariation !== darkLinkCategory
      ? getShape(props)
      : ``}

  ${props =>
    props.link || props.smallLink
      ? `
        min-height: auto;
        font-family: ${props.theme.typography.fonts.secondary};
        font-size: ${
          props.smallLink
            ? props.theme.fonts.fontSize.body.large.primary
            : props.theme.fonts.fontSize.body.large.secondary
        }px;
        letter-spacing: ${props.theme.fonts.letterSpacing.normal};
        border: 0;
        padding: 0;
        text-transform: none;
        text-decoration: ${props.underline ? 'underline' : 'none'}
      ${checkHover}
      &:focus {
        background: none;
      }
      @media ${props.theme.mediaQuery.large} {
        font-size: ${
          props.smallLink
            ? props.theme.fonts.fontSize.body.large.primary
            : props.theme.fonts.fontSize.button.size
        }px;
      }
  `
      : ``}
      ${props =>
        props.fill === 'BLUE'
          ? ` background: ${props.theme.colorPalette.blue.C900}; border: 1px solid ${
              props.theme.colorPalette.blue.C900
            }; `
          : ''};
      ${props => (props.inheritedStyles ? props.inheritedStyles : '')};

`;

export default ButtonStyles;
