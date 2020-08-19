import React from 'react';
import ChatApp from 'components/ChatApp';

import theme from './theme';
import { ThemeProvider } from 'styled-components';


function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ChatApp />
      </ThemeProvider>
    </div>
  );
}

export default App;
