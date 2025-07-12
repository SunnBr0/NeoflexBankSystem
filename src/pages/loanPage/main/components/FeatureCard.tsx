type TFeatureCard = {
  header: string;
  title: string;
  icon: string;
};

export const FeatureCard = ({ header, title, icon }: TFeatureCard) => {
  return (
    <article className="credit-cards-about__item">
      <figure className="credit-cards-about__figure">
        <img src={icon} alt="" />
      </figure>
      <h2>{header}</h2>
      <p>{title}</p>
    </article>
  );
};
