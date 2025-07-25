import React from 'react';
import { Header } from './header/Header';
import { Main } from './main/Main';
import { Footer } from './footer/Footer';
export const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
