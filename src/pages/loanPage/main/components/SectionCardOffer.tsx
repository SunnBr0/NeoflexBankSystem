import { CardOffer } from './СardOffer';

export const SectionCardOffer = () => {
  return (
    <section className="credit-card-offer">
      <CardOffer
        requestSum={200000}
        totalSum={200000}
        countMonth={24}
        payment={9697}
        rate={15}
        insurance={false}
        salaryClient={false}
      />
      <CardOffer
        requestSum={200000}
        totalSum={200000}
        countMonth={24}
        payment={9788}
        rate={11}
        insurance={true}
        salaryClient={false}
      />
      <CardOffer
        requestSum={200000}
        totalSum={200000}
        countMonth={24}
        payment={9603}
        rate={14}
        insurance={false}
        salaryClient={true}
      />
      <CardOffer
        requestSum={200000}
        totalSum={200000}
        countMonth={24}
        payment={9697}
        rate={10}
        insurance={true}
        salaryClient={true}
      />
    </section>
  );
};
