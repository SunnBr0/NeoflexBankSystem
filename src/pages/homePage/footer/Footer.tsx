import logo from '../../../assets/logo.svg';
import { words } from '../../../lang/lang';

export const Footer = () => {
  return (
    <footer className="footer-bar">
      <section className="footer-bar__section">
        <section className="footer-bar__section-header">
          <figure className="footer-bar__logo">
            <img src={logo} alt="" />
          </figure>
          <aside className="footer-bar__aside">
            <h2>{words.homePage.footer.UK.phoneNumber}</h2>
            <address>
              <a href="mailto:info@example.com">
                {words.homePage.footer.UK.email}
              </a>
            </address>
          </aside>
        </section>
        <ul className="footer-bar__list">
          {words.homePage.footer.UK.pagesFooter.map((item, index) => (
            <li key={`${item}-${index}`} className="footer-bar__item">
              <a href=""> {item}</a>
            </li>
          ))}
        </ul>
        <hr className="footer-bar__line" />
        <p className="footer-bar__description">
          {words.homePage.footer.UK.description}
        </p>
      </section>
    </footer>
  );
};
