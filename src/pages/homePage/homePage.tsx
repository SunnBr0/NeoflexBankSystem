import React from 'react';
import '../../style/homePage/header.css';
import '../../style/homePage/main.css';
import '../../style/homePage/credit-card.css';
// import '../../style/homePage/feature-info.css';
import card1 from '../../assets/credit-card/card1.svg';
import card2 from '../../assets/credit-card/card2.svg';
import card3 from '../../assets/credit-card/card3.svg';
import card4 from '../../assets/credit-card/card4.svg';
import feature from '../../assets/feature.svg';
import icon from '../../assets/icon.svg';
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
            <h2 className='feature-info__header'>We Provide Many Features You Can Use</h2>
            <p>You can explore the features that we provide with fun and have their own functions each feature</p>
            <ul className='feature-info__list'>
              <li className='feature-info__item'>
                <figure className='feature-info__icon'>
                  <img src={icon} alt="" />
                </figure>
                <p>Powerfull online protection.</p>
              </li>
            </ul>
          </section>
        </section>
      </main>
    </>
  );
};
