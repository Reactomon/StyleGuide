/* eslint-disable */
const get = (obj, key, def, p, undef) => {
  key = key && key.split ? key.split('.') : [key];
  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }
  return obj === undef ? def : obj;
};
/* eslint-enable */

const createRwdStyle = styleConfig => props => {
  const { theme } = props;
  const { breakpoints } = theme;

  if (typeof breakpoints === 'undefined') {
    return;
  }
  // eslint-disable-next-line consistent-return
  return breakpoints.keys.reduce((rwdStyle, breakpointKey, breakpointKeyIndex) => {
    const breakpointValue = breakpoints.values[breakpointKey];
    let totalRwdStyle = '';
    const newRwdStyle = Object.keys(styleConfig)
      .map(key => {
        let styleValues = props[key];
        let propStyle = '';
        if (!Array.isArray(styleValues)) {
          styleValues = [styleValues];
        }
        if (styleValues[breakpointKeyIndex]) {
          // add alternate value here if you don't want to restrict the value
          const styleValue = get(
            get(theme, styleConfig[key].themeProp),
            styleValues[breakpointKeyIndex]
          );
          propStyle = `${styleConfig[key].prop}:${styleValue};`;
        }
        return propStyle;
      })
      .join('');

    if (breakpointValue > 0 && breakpointKeyIndex > 0 && newRwdStyle) {
      totalRwdStyle = `
      ${rwdStyle}
      @media (min-width: ${breakpointValue}px) {
        ${newRwdStyle}
      }
      `;
    } else {
      totalRwdStyle = rwdStyle + newRwdStyle;
    }

    return totalRwdStyle;
  }, '');
};

export default createRwdStyle;
