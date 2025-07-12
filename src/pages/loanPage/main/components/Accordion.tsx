import { useState } from 'react';
import arrow from '../../../../assets/faq/arrow.svg';
import arrowReverse from '../../../../assets/faq/arrowReverse.svg';

type TAccordion = {
  header: string;
  content: string;
};

export const Accordion = ({ header, content }: TAccordion) => {
  const [show, setShow] = useState(false);
  return (
    <details className="credit-cards-faq__accordion">
      <summary
        onClick={() => setShow((item) => !item)}
        className="credit-cards-faq__accordion-header"
      >
        <h2>{header}</h2>
        <figure className="credit-cards-faq__figure">
            {show ?<img src={arrow} alt="" />:<img src={arrowReverse} alt="" />}
          
        </figure>
      </summary>
      <div className="credit-cards-faq__content">
        <p>{content}</p>
      </div>
    </details>
  );
};
