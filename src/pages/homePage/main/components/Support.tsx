import { useDispatch, useSelector } from 'react-redux';
import emailIcon from '../../../../assets/support/email.svg';
import send from '../../../../assets/support/send.svg';
import { words } from '../../../../lang/lang';
import { subscribeNews } from '../../../../scripts/requets/subscribeNews';
import type { RootState } from '../../../../store/store';
import { setSubcribeNews } from '../../../../store/subscribeNews/subcribeNewsSlice';
import { useState } from 'react';

export const Support = () => {
  const dispatch = useDispatch();
  const isSubcribed = useSelector(
    (state: RootState) => state.subcribeNews.isSubscribe
  );
  const [email, setEmail] = useState('');

  const handleSubscribeNews = async (e: React.FormEvent) => {
    e.preventDefault();
    if ((await subscribeNews('ivanov@mail.com')).status === 200) {
      dispatch(setSubcribeNews());
    } else {
      throw new Error('invalid email');
    }
  };
  console.log(isSubcribed);

  return (
    <section className="support">
      <p className="support__title">{words.homePage.support.UK.title}</p>
      <h2 className="support__header">{words.homePage.support.UK.header}</h2>
      <h2 className="support__subtext">{words.homePage.support.UK.subtext}</h2>
      <article className="support__article">
        {isSubcribed ? (
          <p className="support__error">
            You are already subscribed to the bank's newsletter
          </p>
        ) : (
          <form
            className="support__form"
            action=""
            onSubmit={handleSubscribeNews}
          >
            <figure className="support__figure">
              <img src={emailIcon} alt="" />
            </figure>
            <input
              className="support__input"
              type="email"
              placeholder={words.homePage.support.UK.inputPlaceholder}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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
        )}
      </article>
    </section>
  );
};
