import '../../../../style/homePage/newsCards/cards.scss';
import '../../../../style/homePage/newsCards/containerCard.scss';
import '../../../../style/homePage/newsCards/slider.scss';
import '../../../../style/homePage/newsCards/newsCards.scss';
import { words } from '../../../../lang/lang';
import { useRef } from 'react';
import { useCardSlider } from '../../hooks/useCardSlider';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../../store/store';

export const NewsCards = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);
  const news = useSelector((state: RootState) => state.news.articles);

  useCardSlider({
    sliderRef,
    prevBtnRef,
    nextBtnRef,
    arrCardsClassName: '.card',
    cardsCount: news.length,
  });

  if (!news || news.length === 0) {
    return <p>Loading news...</p>;
  }
  return (
    <section className="news-cards">
      <h2 className="news-cards__header">
        {words.homePage.newsCards.UK.header}
      </h2>
      <p className="news-cards__title">{words.homePage.newsCards.UK.title}</p>
      <section className="container-card" ref={sliderRef}>
        {news.map(({ description, title, url, urlToImage }, index) => (
          <article key={`${urlToImage}-${index}`} className="card">
            <div className="card__content">
              <figure id="card__img">
                <img src={urlToImage} alt="not found" />
              </figure>
              <a className="card__title" href={url} target="_blank">
                ${title}
              </a>
              <p className="card__subtitle">{description}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="slider" id="slider">
        <button
          className="slider__button"
          id="prevBtn"
          ref={prevBtnRef}
          disabled
        >
          <figure className="slider__figure">
            <svg
              stroke="#222222"
              width="28"
              height="28"
              viewBox="0 0 25 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M25 17H9.84211V24.3914C9.84211 24.5845 9.59562 24.6655 9.48109 24.5101L1 13L9.48109 1.48994C9.59562 1.33452 9.84211 1.41552 9.84211 1.60858V9H25" />
            </svg>
          </figure>
        </button>
        <button className="slider__button" id="nextBtn" ref={nextBtnRef}>
          <figure className="slider__figure">
            <svg
              stroke="white"
              width="28"
              height="28"
              viewBox="0 0 25 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 9H15.1579V1.60858C15.1579 1.41552 15.4044 1.33452 15.5189 1.48994L24 13L15.5189 24.5101C15.4044 24.6655 15.1579 24.5845 15.1579 24.3914V17H0" />
            </svg>
          </figure>
        </button>
      </section>
    </section>
  );
};
