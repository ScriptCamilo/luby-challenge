import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from './store';

import GlobalStyle from './styles/global';
import light from './styles/themes/light'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={ store }>
        <ThemeProvider theme={ light }>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
