import { DecisionEmail } from './DecisionEmail';
import { SectionCardOffer } from './SectionCardOffer';
import { OnlineApplicationCreditCard } from './OnlineApplicationCreditCard';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../../store/store';

export const ProcessGetCreditCard = () => {
  const valueData = useSelector((state: RootState) => state.application.offers);
  const selected = useSelector(
    (state: RootState) => state.application.selectedOffer
  );

  return (
    <>
      {valueData.length === 0 && <OnlineApplicationCreditCard />}
      {valueData.length > 0 && selected === null && (
        <SectionCardOffer arrCard={valueData} />
      )}
      {selected && <DecisionEmail />}
    </>
  );
};
