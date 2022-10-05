import React from 'react';
import ReactDOM from 'react-dom/client';
import store from 'redux/store';
import { App } from 'components/App';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'theme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook/">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
