import feature from '../../../../assets/feature.svg';
import icon from '../../../../assets/icon.svg';
import { words } from '../../../../lang/lang';

export const FeatureInfo = () => {
  return (
    <section className="feature-info">
      <figure className="feature-info__img">
        <img src={feature} alt="" />
      </figure>
      <section className="feature-info__section">
        <h2 className="feature-info__header">
          {words.homePage.featureInfo.UK.header}
        </h2>
        <p className="feature-info__header-title">
          {words.homePage.featureInfo.UK.title}
        </p>
        <ul className="feature-info__list">
          {words.homePage.featureInfo.UK.listFeatures.map((item, index) => (
            <li key={`${item}-${index}`} className="feature-info__item">
              <figure
                className={`feature-info__icon feature-info__icon`}
              >
                <img src={icon} alt="" />
              </figure>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};
