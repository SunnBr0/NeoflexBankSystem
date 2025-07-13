import { DecisionEmail } from './DecisionEmail';
import { SectionCardOffer } from './SectionCardOffer';

export const ProcessGetCreditCard = () => {
  // сначала будет форма,потом будет выбор предложений ,потом сообщение,что оно ушло на почту
  return (
    <>
      <SectionCardOffer />
      <DecisionEmail/>
    </>
  );
};
