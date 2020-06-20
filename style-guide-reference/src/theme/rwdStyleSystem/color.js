import createRwdStyleSystem from './createRwdStyleSystem';

const colorConfig = {
  color: {
    prop: 'color',
    themeProp: 'colorPalette',
  },
  backgroundColor: {
    prop: 'background-color',
    themeProp: 'colorPalette',
  },
};

export default createRwdStyleSystem(colorConfig);
