import React from 'react';
import '../../style/homePage/header/header.scss';
import '../../style/homePage/map/map.scss';
import '../../style/homePage/main/main.scss';
import '../../style/homePage/creditCard/creditCard.scss';
import '../../style/homePage/featureInfo/featureInfo.scss';
import '../../style/homePage/currencyCard/currencyCard.scss';
import '../../style/homePage/support/support.scss';
import '../../style/homePage/footer/footer.scss';
import '../../style/utility/sizeValue.scss';
import '../../style/utility/fontFamily.scss';
import '../../style/utility/buttonStyle.scss';

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
