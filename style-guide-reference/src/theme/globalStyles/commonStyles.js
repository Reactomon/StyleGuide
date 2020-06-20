import { css } from 'styled-components';
import theme from '../themes/TCP';

const { fonts, breakpoints, mediaQuery } = theme;
export default css`
  body {
    font-family: ${fonts.primaryFontFamily};
    overflow-x: hidden;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    margin: 0 auto;
    position: relative;
  }

  @media print {
    a {
      text-decoration: none !important;
    }
    .couponModal_btnWrapper,
    .couponModal_print {
      display: none !important;
    }
    .content-wrapper {
      display: none;
    }
  }

  .content-wrapper {
    max-width: ${breakpoints.xlarge};
    margin: 0 auto;
  }

  .full-background {
    background: ${props => props.theme.colorPalette.gray[300]};
  }

  .no-scroll {
    @media ${mediaQuery.smallOnly} {
      overflow: hidden;
    }
  }

  .ReactModal__Body--open {
    overflow: hidden;
    .pac-container {
      z-index: ${props => props.theme.zindex.zGoogleAutosuggest};
    }
  }

  input[type='text']::-ms-clear {
    display: none;
  }

  .right {
    float: right;
  }

  .left {
    float: left;
  }

  .clearfix {
    clear: both;
  }

  .textRight {
    text-align: right;
  }

  .textLeft {
    text-align: left;
  }

  &.focus-styling {
    &:focus {
      outline: 1px dashed black;
    }

    &:focus:not(.focus-visible) {
      outline: none;
    }
  }

  .is-hidden {
    display: none !important;
  }

  .is-visible {
    display: block;
  }

  .pointerEventsNone {
    pointer-events: none;
  }

  .visually-hidden {
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 2;
  }

  .disableBodyScroll {
    overflow: hidden;
  }

  figure {
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
  }

  .full-bleed {
    width: 100%;
  }

  .margin-none {
    margin: 0 !important;
  }

  .padding-none {
    padding: 0 !important;
  }

  ul {
    padding: 0px;
    margin: 0px;
  }

  li {
    list-style-type: none;
  }

  h2,
  p {
    margin: 0;
  }

  .line-height-0 {
    line-height: 0;
  }

  .hide-on-mobile {
    @media ${mediaQuery.smallOnly} {
      display: none !important;
    }
  }

  .hide-on-desktop {
    @media ${mediaQuery.largeOnly} {
      display: none !important;
    }
    @media ${mediaQuery.xlarge} {
      display: none !important;
    }
  }

  .hide-on-tablet {
    @media ${mediaQuery.mediumOnly} {
      display: none !important;
    }
  }
  .text-break {
    word-break: break-word;
  }
  .full-width {
    width: 100%;
    display: inline-block;
  }

  .img-placeholder {
    width: 100%;
    height: 100%;
    max-height: 100%;
    max-width: 100%;
  }

  .capFirstLetter {
    text-transform: capitalize;
  }

  ${props => {
    return Object.keys(props.theme.spacing.ELEM_SPACING).map(key => {
      return `
      .elem-mt-${key} {
        margin-top: ${props.theme.spacing.ELEM_SPACING[key]}
      }
      .elem-mr-${key} {
        margin-right: ${props.theme.spacing.ELEM_SPACING[key]}
      }
      .elem-mb-${key} {
        margin-bottom: ${props.theme.spacing.ELEM_SPACING[key]}
      }
      .elem-ml-${key} {
        margin-left: ${props.theme.spacing.ELEM_SPACING[key]}
      }
      .elem-pt-${key} {
        padding-top: ${props.theme.spacing.ELEM_SPACING[key]}
      }
      .elem-pr-${key} {
        padding-right: ${props.theme.spacing.ELEM_SPACING[key]}
      }
      .elem-pb-${key} {
        padding-bottom: ${props.theme.spacing.ELEM_SPACING[key]}
      }
      .elem-pl-${key} {
        padding-left: ${props.theme.spacing.ELEM_SPACING[key]}
      }`;
    });
  }}

  ${props => {
    return Object.keys(props.theme.spacing.LAYOUT_SPACING).map(key => {
      return `
      .layout-pt-${key} {
        padding-top: ${props.theme.spacing.LAYOUT_SPACING[key]}
      }
      .layout-pr-${key} {
        padding-right: ${props.theme.spacing.LAYOUT_SPACING[key]}
      }
      .layout-pb-${key} {
        padding-bottom: ${props.theme.spacing.LAYOUT_SPACING[key]}
      }
      .layout-pl-${key} {
        padding-left: ${props.theme.spacing.LAYOUT_SPACING[key]}
      }`;
    });
  }}
`;
