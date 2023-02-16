import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from 'redux/store';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { BaseStyle } from 'stylesheet/baseStyle';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from './stylesheet/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/wallet-team-project">
      <BaseStyle />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
