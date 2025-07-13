import { DigitalCreditCard } from './components/DigitalСreditСard';
import { InformationGetCard } from './components/InformationGetCard';
import { NavigateBarCreditCards } from './components/NavigateBarCreditCards';

export const Main = () => {
  return (
    <main>
      <DigitalCreditCard />
      <NavigateBarCreditCards/>
      <InformationGetCard/>
    </main>
  );
};
