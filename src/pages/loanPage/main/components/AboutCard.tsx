import { FeatureCard } from './FeatureCard';
import { words } from '../../../../lang/lang';
import money from '../../../../assets/aboutCard/money.svg';
import calendar from '../../../../assets/aboutCard/calendar.svg';
import clock from '../../../../assets/aboutCard/clock.svg';
import bag from '../../../../assets/aboutCard/bag.svg';
import creditCard from '../../../../assets/aboutCard/credit-card.svg';
export const AboutCard = () => {
  return (
    <section className="credit-cards-about">
      <FeatureCard
        header={
          words.loanPage.navigateBarCreditCards.UK.aboutCard.translations.header
        }
        title={
          words.loanPage.navigateBarCreditCards.UK.aboutCard.translations.title
        }
        icon={money}
      />
      <FeatureCard
        header={
          words.loanPage.navigateBarCreditCards.UK.aboutCard.percentLoan.header
        }
        title={
          words.loanPage.navigateBarCreditCards.UK.aboutCard.percentLoan.title
        }
        icon={calendar}
      />
      <FeatureCard
        header={
          words.loanPage.navigateBarCreditCards.UK.aboutCard.convenience.header
        }
        title={
          words.loanPage.navigateBarCreditCards.UK.aboutCard.convenience.title
        }
        icon={clock}
      />
      <FeatureCard
        header={
          words.loanPage.navigateBarCreditCards.UK.aboutCard.purchases.header
        }
        title={
          words.loanPage.navigateBarCreditCards.UK.aboutCard.purchases.title
        }
        icon={bag}
      />
      <FeatureCard
        header={
          words.loanPage.navigateBarCreditCards.UK.aboutCard.replenishment.header
        }
        title={
          words.loanPage.navigateBarCreditCards.UK.aboutCard.replenishment.title
        }
        icon={creditCard}
      />
    </section>
  );
};
