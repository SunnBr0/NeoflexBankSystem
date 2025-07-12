type TCashbackCard = {
  header: string;
  title: string;
};
export const CashbackCard = ({ header, title }: TCashbackCard) => {
  return (
    <article className="credit-cards-cashback__item">
      <p>{title}</p>
      <h2>{header}</h2>
    </article>
  );
};
