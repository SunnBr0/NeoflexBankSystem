import { useState } from 'react';
import { words } from '../../../../lang/lang';
import { AboutCard } from './AboutCard';
import { RatesConditions } from './RatesConditions';
import { Cashback } from './Cashback';
import { FaqSection } from './FaqSection';
export const NavigateBarCreditCards = () => {
  const [link, setLink] = useState(words.loanPage.navigateBarCreditCards.UK.navigation[0]);

  const handleClickLink = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    e.preventDefault();
    setLink(item);
  };
  return (
    <>
      <section className="nav-bar-credit-cards">
        <ul className="nav-bar-credit-cards__list">
          {words.loanPage.navigateBarCreditCards.UK.navigation.map(
            (item, index) => (
              <li
                key={`${item}-${index}`}
                className="nav-bar-credit-cards__item"
              >
                <a
                  href=""
                  onClick={(e) => handleClickLink(e, item)}
                  className={link === item ? 'active' : ''}
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </section>
      <section className="credit-cards-information">
        {link === 'About card' && <AboutCard />}
        {link === 'Rates and conditions' && <RatesConditions />}
        {link === 'Cashback' && <Cashback />}
        {link === 'FAQ' && <FaqSection />}
      </section>
    </>
  );
};
