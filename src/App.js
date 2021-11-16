import React from 'react';
import { Main } from './pages/Main';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GlobalStyle } from './components/GlobalStyle';

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
