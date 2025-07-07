import email from '../../../../assets/support/email.svg';
import send from '../../../../assets/support/send.svg';
import { words } from '../../../../lang/lang';

export const Support = () => {
  return (
    <section className="support">
      <p className="support__title">{words.homePage.support.UK.title}</p>
      <h2 className="support__header">{words.homePage.support.UK.header}</h2>
      <h2 className="support__subtext">{words.homePage.support.UK.subtext}</h2>
      <article className="support__article">
        <form className="support__form" action="">
          <figure className="support__figure">
            <img src={email} alt="" />
          </figure>
          <input
            className="support__input"
            type="email"
            placeholder={words.homePage.support.UK.inputPlaceholder}
          />
          <button className="support__button">
            <figure className="support__button-figure">
              <img src={send} alt="" />
            </figure>
            <p className="support__button-title">
              {words.homePage.support.UK.buttonTitle}
            </p>
          </button>
        </form>
      </article>
    </section>
  );
};
