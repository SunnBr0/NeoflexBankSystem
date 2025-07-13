import circle from '../../../../assets/informationGetCard/circle.svg';
import { words } from '../../../../lang/lang';

export const InformationGetCard = () => {
  return (
    <section className="information-get-card">
      <h2 className="information-get-card__header">
        {words.loanPage.informationGetCard.UK.header}
      </h2>
      <section className="information-get-card__section">
        {words.loanPage.informationGetCard.UK.title.map((title, index) => (
          <article
            key={`${title}-${index}`}
            className="information-get-card__item"
          >
            <div className="information-get-card__figures">
              <p className="information-get-card__figures__number">
                {index + 1}
              </p>
              <figure className="information-get-card__figures__cicle">
                <img src={circle} alt="" />
              </figure>

              <div className="information-get-card__figures__line" />
            </div>
            <p className="information-get-card__item__title">{title}</p>
          </article>
        ))}
      </section>
    </section>
  );
};
