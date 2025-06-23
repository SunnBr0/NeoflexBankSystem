import "../../../style/homePage/news-cards/cards.scss"
import "../../../style/homePage/news-cards/container-card.scss"
import "../../../style/homePage/news-cards/slider.scss"
export const NewsCards = () => {
  return (
    <>
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
      <section id="slider">
        <button id="prevBtn" disabled>
          Назад
        </button>
        <button id="nextBtn">Вперед</button>
      </section>
    </>
  );
};
