import { CashbackCard } from './CashbackCard';
import { words } from '../../../../lang/lang';

export const Cashback = () => {
  return (
    <section className="credit-cards-cashback">
      {Object.entries(words.loanPage.navigateBarCreditCards.UK.cashback).map(
        ([title, header]) => (
          <CashbackCard header={header} title={title} />
        )
      )}
    </section>
  );
};
