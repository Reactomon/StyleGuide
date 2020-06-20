import blue from './colors/blue';
import gray from './colors/gray';
import green from './colors/green';
import red from './colors/red';
import common from './colors/common';
import yellow from './colors/yellow';
import orange from './colors/orange';
import pink from './colors/pink';

function createThemeColorPalette(colors = {}) {
  const {
    primary = {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    },
  } = colors;
  const {
    secondary = {
      light: red[100],
      main: red[300],
      dark: red[300],
    },
  } = colors;
  const {
    text = {
      primary: gray[900],
      secondary: gray[700],
      disabled: gray[500],
      hint: gray[600],
      lightgray: gray[300],
      darkgray: gray[800],
    },
  } = colors;

  const { white, black, purple, newpurple, venmoBorder } = common;
  const {
    userTheme = {
      plcc: blue.B100,
      plccLight: blue[100],
      mpr: orange[800],
      mprLight: orange[100],
      mprPrimary: orange[300],
      noMprPlcc: gray[1000],
    },
  } = colors;

  const {
    BUTTON = {
      WHITE: {
        NORMAL: '#ffffff',
        BORDER: '#9B9B9B',
        HOVER: '#f3f3f3',
        FOCUS: '#d8d8d8',
        ALT_HOVER: '#f2f9fe',
        ALT_FOCUS: '#e2ecf3',
        TEXT: '#595959',
      },
      BLUE: {
        NORMAL: '#2e6a91',
        BORDER: '#2e6a91',
        HOVER: '#1f4862',
        FOCUS: '#1f4862',
        ALT_HOVER: '#1f4862',
        ALT_FOCUS: '#1f4862',
        TEXT: '#fff',
      },
      RED: {
        NORMAL: '#ffffff',
        BORDER: '#c84747',
        HOVER: '#f3d7d7',
        FOCUS: '#e19999',
        ALT_HOVER: '#e19999',
        ALT_FOCUS: '#e19999',
        TEXT: '#c84747',
      },
      BLACK: {
        NORMAL: '#1a1a1a',
        BORDER: '#1a1a1a',
        HOVER: '#595959',
        FOCUS: '#595959',
        ALT_HOVER: '#ffffff',
        ALT_FOCUS: '#ffffff',
        TEXT: '#ffffff',
      },
    },
  } = colors;

  return {
    white,
    black,
    purple,
    newpurple,
    primary,
    secondary,
    text,
    success: green[500],
    error: red[500],
    gray,
    yellow,
    orange,
    red,
    pink,
    blue,
    userTheme,
    BUTTON,
    venmoBorder,
  };
}

export default createThemeColorPalette;
