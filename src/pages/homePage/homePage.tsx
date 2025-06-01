import React from 'react';
import '../../style/homePage/header.css';
import '../../style/homePage/main.css';
export const HomePage: React.FC = () => {
  return (
    <main>
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
    </main>
  );
};
