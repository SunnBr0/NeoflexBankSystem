import '../../../style/homePage/news-cards/cards.scss';
import '../../../style/homePage/news-cards/container-card.scss';
import '../../../style/homePage/news-cards/slider.scss';
import '../../../style/homePage/news-cards/news-cards.scss';
export const NewsCards = () => {
  return (
    <section className="news-cards">
      <h2 className="news-cards__header">
        Current news from the world of finance
      </h2>
      <p className="news-cards__title">
        We update the news feed every 15 minutes. You can learn more by clicking
        on the news you are interested in.
      </p>
      <section className="container-card">
        <article className="card">
          <div className="card__content">
            <figure id="card__img">
              <img src="" alt="not found" />
            </figure>
            <p className="card__title"></p>
            <p className="card__subtitle"></p>
          </div>
        </article>
        <article className="card">
          <div className="card__content">
            <figure id="card__img">
              <img src="" alt="not found" />
            </figure>
            <p className="card__title"></p>
            <p className="card__subtitle"></p>
          </div>
        </article>
        <article className="card">
          <div className="card__content">
            <figure id="card__img">
              <img src="" alt="not found" />
            </figure>
            <p className="card__title"></p>
            <p className="card__subtitle"></p>
          </div>
        </article>
        <article className="card">
          <div className="card__content">
            <figure id="card__img">
              <img src="" alt="not found" />
            </figure>
            <p className="card__title"></p>
            <p className="card__subtitle"></p>
          </div>
        </article>
        <article className="card">
          <div className="card__content">
            <figure id="card__img">
              <img src="" alt="not found" />
            </figure>
            <p className="card__title"></p>
            <p className="card__subtitle"></p>
          </div>
        </article>
        <article className="card">
          <div className="card__content">
            <figure id="card__img">
              <img src="" alt="not found" />
            </figure>
            <p className="card__title"></p>
            <p className="card__subtitle"></p>
          </div>
        </article>
      </section>
      <section className="slider" id="slider">
        <button className="slider__button" id="prevBtn" disabled>
          <figure className="slider__figure">
            <svg
              width="28"
              stroke="#222222"
              height="28"
              viewBox="0 0 25 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M25 17H9.84211V24.3914C9.84211 24.5845 9.59562 24.6655 9.48109 24.5101L1 13L9.48109 1.48994C9.59562 1.33452 9.84211 1.41552 9.84211 1.60858V9H25" />
            </svg>
          </figure>
        </button>
        <button className="slider__button" id="nextBtn">
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
