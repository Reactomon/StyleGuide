import { css } from 'styled-components';
import { getFontsURL } from '@tcp/core/src/utils';

// TODO: issue on semibold 500 or 600 font; Can we set semibold === 500 or 600
export default css`
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local('Montserrat Regular'), local('Montserrat-Regular'),
      url(${getFontsURL('fonts/Montserrat-regular.woff2')}) format('woff2'),
      url(${getFontsURL('fonts/Montserrat-regular.woff')}) format('woff');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    src: local('Montserrat Medium'), local('Montserrat-Medium'),
      url(${getFontsURL('fonts/Montserrat-500.woff2')}) format('woff2'),
      url(${getFontsURL('fonts/Montserrat-500.woff')}) format('woff');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'),
      url(${getFontsURL('fonts/Montserrat-600.woff2')}) format('woff2'),
      url(${getFontsURL('fonts/Montserrat-600.woff')}) format('woff');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    src: local('Montserrat Bold'), local('Montserrat-Bold'),
      url(${getFontsURL('fonts/Montserrat-700.woff2')}) format('woff2'),
      url(${getFontsURL('fonts/Montserrat-700.woff')}) format('woff');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    src: local('Montserrat ExtraBold'), local('Montserrat-ExtraBold'),
      url(${getFontsURL('fonts/Montserrat-800.woff2')}) format('woff2'),
      url(${getFontsURL('fonts/Montserrat-800.woff')}) format('woff');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 900;
    src: local('Montserrat Black'), local('Montserrat-Black'),
      url(${getFontsURL('fonts/Montserrat-900.woff2')}) format('woff2'),
      url(${getFontsURL('fonts/Montserrat-900.woff')}) format('woff');
  }

  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    src: local('Nunito Regular'), local('Nunito-Regular'),
      url(${getFontsURL('fonts/Nunito-regular.woff2')}) format('woff2'),
      url(${getFontsURL('fonts/Nunito-regular.woff')}) format('woff');
  }

  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    src: local('Nunito SemiBold'), local('Nunito-SemiBold'),
      url(${getFontsURL('fonts/Nunito-600.woff2')}) format('woff2'),
      url(${getFontsURL('fonts/Nunito-600.woff')}) format('woff');
  }

  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    src: local('Nunito Bold'), local('Nunito-Bold'),
      url(${getFontsURL('fonts/Nunito-700.woff2')}) format('woff2'),
      url(${getFontsURL('fonts/Nunito-700.woff')}) format('woff');
  }

  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 800;
    src: local('Nunito ExtraBold'), local('Nunito-ExtraBold'),
      url(${getFontsURL('fonts/Nunito-800.woff2')}) format('woff2'),
      url(${getFontsURL('fonts/Nunito-800.woff')}) format('woff');
  }

  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 900;
    src: local('Nunito Black'), local('Nunito-Black'),
      url(${getFontsURL('fonts/Nunito-900.woff2')}) format('woff2'),
      url(${getFontsURL('fonts/Nunito-900.woff')}) format('woff');
  }
`;
