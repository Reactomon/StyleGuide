import createRwdStyleSystem from './createRwdStyleSystem';

const typographyConfig = {
  fontFamily: {
    prop: 'font-family',
    themeProp: 'typography.fonts',
  },
  fontSize: {
    prop: 'font-size',
    themeProp: 'typography.fontSizes',
  },
  fontWeight: {
    prop: 'font-weight',
    themeProp: 'typography.fontWeights',
  },
  fontStyle: {
    prop: 'font-style',
    themeProp: 'typography.fontStyles',
  },
  lineHeight: {
    prop: 'line-height',
    themeProp: 'typography.lineHeights',
  },
  letterSpacing: {
    prop: 'letter-spacing',
    themeProp: 'typography.letterSpacings',
  },
  textAlign: {
    prop: 'text-align',
    themeProp: 'typography.textAligns',
  },
};

export default createRwdStyleSystem(typographyConfig);
