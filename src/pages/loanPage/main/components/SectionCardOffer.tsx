import { useDispatch } from 'react-redux';
import type { TPropsCardOffer } from '../../../../scripts/utils/type';
import { CardOffer } from './СardOffer';
import { selectOffer } from '../../../../store/application/applicationSlice';


export const SectionCardOffer = ({ arrCard }: TPropsCardOffer) => {

  const dispatch = useDispatch()
  return (
    <section className="credit-card-offer">
      {arrCard.map(
        (offer,index) => (
          <CardOffer
            key={index}
            requestSum={offer.requestedAmount}
            totalSum={offer.totalAmount}
            countMonth={offer.term}
            payment={offer.monthlyPayment}
            rate={offer.rate}
            insurance={offer.isInsuranceEnabled}
            salaryClient={offer.isSalaryClient}
            onClick={() => dispatch(selectOffer(offer))} 
          />
        )
      )}
    </section>
  );
};
