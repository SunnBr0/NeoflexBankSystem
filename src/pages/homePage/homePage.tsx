import React from 'react';
import '../../style/homePage/header/header.css';
import '../../style/homePage/map/map.css';
import '../../style/homePage/main/main.css';
import '../../style/homePage/credit-card/credit-card.css';
import '../../style/homePage/feature-info/feature-info.css';
import '../../style/homePage/currency-card/currency-card.css';
import '../../style/homePage/support/support.css';
import card1 from '../../assets/credit-card/card1.svg';
import card2 from '../../assets/credit-card/card2.svg';
import card3 from '../../assets/credit-card/card3.svg';
import card4 from '../../assets/credit-card/card4.svg';
import feature from '../../assets/feature.svg';
import icon from '../../assets/icon.svg';
import iconBank from '../../assets/currency-card/icon-bank.svg';
import map from '../../assets/map.svg';
import email from '../../assets/support/email.svg';
import send from '../../assets/support/send.svg';
export const HomePage: React.FC = () => {
  return (
    <>
      <header className="header">
        <p className="header__text">NeoBank</p>
        <nav className="header__nav">
          <ul className="nav__list">
            <li className="nav__text">Credit card</li>
            <li className="nav__text">Product</li>
            <li className="nav__text">Account</li>
            <li className="nav__text">Resources</li>
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
            <p>
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
        <section className="currency-card">
          <section className="currency-card__section">
            <h2 className="currency-card__header">
              Exchange rate in internet bank
            </h2>
            <p className="currency-card__title">Currency</p>
            <ul className="currency-card__list">
              <li className="currency-card__item">
                <h3>USD:</h3>
                <p>60.78</p>
              </li>
              <li className="currency-card__item">
                <h3>CNY:</h3>
                <p>9.08</p>
              </li>
              <li className="currency-card__item">
                <h3>CHF:</h3>
                <p>64.78</p>
              </li>
              <li className="currency-card__item">
                <h3>USD:</h3>
                <p>60.78</p>
              </li>
              <li className="currency-card__item">
                <h3>JPY:</h3>
                <p>0.46</p>
              </li>
              <li className="currency-card__item">
                <h3>TRY:</h3>
                <p>3.39</p>
              </li>
            </ul>
            <p className="currency-card__subtext">All courses</p>
          </section>
          <aside className="currency-card__aside">
            <p>Update every 15 minutes, MSC 09.08.2022</p>
            <figure className="currency-card__figure">
              <img src={iconBank} alt="" />
            </figure>
          </aside>
        </section>
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
        <section className="support">
          <p className="support__title">Support</p>
          <h2 className="support__header">Subscribe Newsletter & get</h2>
          <h2 className="support__subtext">Bank News</h2>
          <article className="support__article">
            <form className="support__form" action="">
              <figure className="support__figure">
                <img src={email} alt="" />
              </figure>
              <input className="support__input" type="email" placeholder="Your email" />
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
    </>
  );
};
