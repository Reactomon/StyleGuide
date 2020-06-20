import React from 'react';
import { ThemeProvider } from 'styled-components';
import themeRecapDefault from './theme/ThemeRecap';
import FirstComponent from './components/First';

const App = () => (
  <ThemeProvider theme={themeRecapDefault}>
      <FirstComponent/>
    </ThemeProvider>
);

export default App;
