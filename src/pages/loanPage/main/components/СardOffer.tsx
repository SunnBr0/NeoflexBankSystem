import offer from '../../../../assets/cardOffer/offer.svg';
import checkFill from '../../../../assets/cardOffer/checkFill.svg';
import closeRoundFill from '../../../../assets/cardOffer/closeRoundFill.svg';
import { words } from '../../../../lang/lang';
import { stringValidSum } from '../../../../scripts/utils/utils';
type TCardOffer = {
  requestSum: number;
  totalSum: number;
  countMonth: number;
  payment: number;
  rate: number;
  insurance: boolean;
  salaryClient: boolean;
};
export const CardOffer = ({
  requestSum,
  totalSum,
  countMonth,
  payment,
  rate,
  insurance,
  salaryClient,
}: TCardOffer) => {
 
  return (
    <article className="credit-card-offer__item">
      <figure className="credit-card-offer__figure-icon">
        <img src={offer} alt="" />
      </figure>
      <p className="credit-card-offer__title">
        {words.loanPage.processGetCreditCard.UK.cardFields.request}{' '}
        {stringValidSum(requestSum)}
      </p>
      <p className="credit-card-offer__title">
        {words.loanPage.processGetCreditCard.UK.cardFields.total}{' '}
        {stringValidSum(totalSum)}
      </p>
      <p className="credit-card-offer__title">
        {words.loanPage.processGetCreditCard.UK.cardFields.months[0]}{' '}
        {countMonth}{' '}
        {words.loanPage.processGetCreditCard.UK.cardFields.months[1]}
      </p>
      <p className="credit-card-offer__title">
        {words.loanPage.processGetCreditCard.UK.cardFields.payment}{' '}
        {stringValidSum(payment)}
      </p>
      <p className="credit-card-offer__title">
        {words.loanPage.processGetCreditCard.UK.cardFields.rate} {rate + '%'}
      </p>
      <div className="credit-card-offer__container">
        <p className="credit-card-offer__title">
          {words.loanPage.processGetCreditCard.UK.cardFields.insurance}
        </p>
        {insurance ? (
          <figure className="credit-card-offer__figure">
            <img src={checkFill} alt=""></img>
          </figure>
        ) : (
          <figure className="credit-card-offer__figure">
            <img src={closeRoundFill} alt=""></img>
          </figure>
        )}
      </div>
      <div className="credit-card-offer__container">
        <p className="credit-card-offer__title">
          {words.loanPage.processGetCreditCard.UK.cardFields.salary}
        </p>
        {salaryClient ? (
          <figure className="credit-card-offer__figure">
            <img src={checkFill} alt=""></img>
          </figure>
        ) : (
          <figure className="credit-card-offer__figure">
            <img src={closeRoundFill} alt=""></img>
          </figure>
        )}
      </div>
      <button className="credit-card-offer__button">
        {words.loanPage.processGetCreditCard.UK.button}
      </button>
    </article>
  );
};
