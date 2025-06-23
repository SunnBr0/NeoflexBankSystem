import React from 'react';
import '../../style/homePage/header/header.scss';
import '../../style/homePage/map/map.scss';
import '../../style/homePage/main/main.scss';
import '../../style/homePage/credit-card/credit-card.scss';
import '../../style/homePage/feature-info/feature-info.scss';
import '../../style/homePage/currency-card/currency-card.scss';
import '../../style/homePage/support/support.scss';
import '../../style/homePage/footer/footer.scss';
import '../../style/utility/size-value.scss';
import '../../style/utility/font-family.scss';
import '../../style/utility/button-style.scss';
import card1 from '../../assets/credit-card/card1.svg';
import card2 from '../../assets/credit-card/card2.svg';
import card3 from '../../assets/credit-card/card3.svg';
import card4 from '../../assets/credit-card/card4.svg';
import feature from '../../assets/feature.svg';
import icon from '../../assets/icon.svg';
import map from '../../assets/map.svg';
import email from '../../assets/support/email.svg';
import send from '../../assets/support/send.svg';
import logo from '../../assets/logo.svg';
import { CurrencyCard } from './components/currency-card';
import { NewsCards } from './components/news-cards';
export const HomePage: React.FC = () => {
  return (
    <>
      <header className="header">
        <p className="header__text">NeoBank</p>
        <nav className="header__nav">
          <ul className="nav__list">
            <li className="nav__text">
              <a href="">Credit card</a>
            </li>
            <li className="nav__text">
              <a href=""> Product</a>
            </li>
            <li className="nav__text">
              <a href="">Account</a>
            </li>
            <li className="nav__text">
              <a href="">Resources</a>
            </li>
          </ul>
        </nav>
        <button className="header__button">Online Bank</button>
      </header>
      <main>
        <section className="credit-card">
          <section className="credit-card__section">
            <h2 className="credit-card__header">
              Choose the design you like <br /> and apply for card right now
            </h2>
            <button className="credit-card__button">Choose the card</button>
          </section>
          <aside className="credit-card__list">
            <figure className="credit-card__item">
              <img src={card1} alt="card2" />
            </figure>
            <figure className="credit-card__item">
              <img src={card2} alt="card2" />
            </figure>
            <figure className="credit-card__item">
              <img src={card3} alt="card2" />
            </figure>
            <figure className="credit-card__item">
              <img src={card4} alt="card2" />
            </figure>
          </aside>
        </section>
        <section className="feature-info">
          <figure className="feature-info__img">
            <img src={feature} alt="" />
          </figure>
          <section className="feature-info__section">
            <h2 className="feature-info__header">
              We Provide Many Features You Can Use
            </h2>
            <p className="feature-info__header-title">
              You can explore the features that we provide with fun and have
              their own functions each feature
            </p>
            <ul className="feature-info__list">
              <li className="feature-info__item">
                <figure className="feature-info__icon feature-info__icon-1">
                  <img src={icon} alt="" />
                </figure>
                <p>Powerfull online protection.</p>
              </li>
              <li className="feature-info__item">
                <figure className="feature-info__icon feature-info__icon-2">
                  <img src={icon} alt="" />
                </figure>
                <p>Cashback without borders.</p>
              </li>
              <li className="feature-info__item">
                <figure className="feature-info__icon feature-info__icon-3">
                  <img src={icon} alt="" />
                </figure>
                <p>Personal design</p>
              </li>
              <li className="feature-info__item">
                <figure className="feature-info__icon feature-info__icon-4">
                  <img src={icon} alt="" />
                </figure>
                <p>Work anywhere in the world</p>
              </li>
            </ul>
          </section>
        </section>
        <CurrencyCard/>
        <section className="map">
          <h2 className="map__header">
            You can use our services anywhere in the world
          </h2>
          <p className="map__title">
            Withdraw and transfer money online through our application
          </p>
          <figure className="map__figure">
            <img src={map} alt="" />
          </figure>
        </section>
        <NewsCards/>
        <section className="support">
          <p className="support__title">Support</p>
          <h2 className="support__header">Subscribe Newsletter & get</h2>
          <h2 className="support__subtext">Bank News</h2>
          <article className="support__article">
            <form className="support__form" action="">
              <figure className="support__figure">
                <img src={email} alt="" />
              </figure>
              <input
                className="support__input"
                type="email"
                placeholder="Your email"
              />
              <button className="support__button">
                <figure className="support__button-figure">
                  <img src={send} alt="" />
                </figure>
                <p className="support__button-title">Subscribe</p>
              </button>
            </form>
          </article>
        </section>
      </main>
      <footer className="footer">
        <section className="footer__section">
          <section className="footer__section-header">
            <figure className="footer__logo">
              <img src={logo} alt="" />
            </figure>
            <aside className="footer__aside">
              <h2>+7 (495) 984 25 13</h2>
              <address> <a href="mailto:info@example.com">info@neoflex.ru</a></address> 
            </aside>
          </section>
          <ul className="footer__list">
            <li className="footer__item">
              <a href=""> About bank</a>
            </li>
            <li className="footer__item">
              <a href=""> Ask a Question</a>
            </li>
            <li className="footer__item">
              <a href=""> Quality of service</a>
            </li>
            <li className="footer__item">
              <a href=""> Requisites</a>
            </li>
            <li className="footer__item">
              <a href=""> Press center</a>
            </li>
            <li className="footer__item">
              <a href=""> Bank career</a>
            </li>
            <li className="footer__item">
              <a href=""> Investors</a>
            </li>
            <li className="footer__item">
              <a href=""> Analytics</a>
            </li>
            <li className="footer__item">
              <a href=""> Business and processes</a>
            </li>
            <li className="footer__item">
              <a href=""> Compliance and business ethics</a>
            </li>
          </ul>
          <hr className="footer__line" />
          <p className="footer__description">
            We use cookies to personalize our services and improve the user
            experience of our website. Cookies are small files containing
            information about previous visits to a website. If you do not want
            to use cookies, please change your browser settings
          </p>
        </section>
      </footer>
    </>
  );
};
