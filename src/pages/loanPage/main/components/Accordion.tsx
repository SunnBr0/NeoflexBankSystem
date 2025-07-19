import arrow from '../../../../assets/faq/arrow.svg';
import arrowReverse from '../../../../assets/faq/arrowReverse.svg';

type TAccordion = {
  header: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
};

export const Accordion = ({
  header,
  content,
  isOpen,
  onToggle,
}: TAccordion) => {
  return (
    <article className="credit-cards-faq__accordion">
      <div onClick={onToggle} className="credit-cards-faq__accordion-header">
        <h2>{header}</h2>
        <figure className="credit-cards-faq__figure">
          <img src={isOpen ? arrow : arrowReverse} alt="" />
        </figure>
      </div>

      {isOpen && (
        <div className="credit-cards-faq__content">
          <p>{content}</p>
        </div>
      )}
    </article>
  );
};
