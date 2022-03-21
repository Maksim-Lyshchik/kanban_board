import React from 'react';
import { Main } from './pages/Main';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GlobalStyle } from './components/GlobalStyle';
import { history, store } from './store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

export const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <GlobalStyle />
        <Header />
        <Main />
        <Footer />
      </ConnectedRouter>
    </Provider>
  );
};
