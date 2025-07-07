import map from '../../../../assets/map.svg';
import { words } from '../../../../lang/lang';

export const MapSection = () => {
  return (
    <section className="map">
      <h2 className="map__header">
        {words.homePage.mapSection.UK.header}
      </h2>
      <p className="map__title">
        {words.homePage.mapSection.UK.title}
      </p>
      <figure className="map__figure">
        <img src={map} alt="" />
      </figure>
    </section>
  );
};
