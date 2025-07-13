import { DigitalCreditCard } from './components/DigitalСreditСard';
import { InformationGetCard } from './components/InformationGetCard';
import { NavigateBarCreditCards } from './components/NavigateBarCreditCards';
import { ProcessGetCreditCard } from './components/ProcessGetCreditCard';

export const Main = () => {
  return (
    <main>
      <DigitalCreditCard />
      <NavigateBarCreditCards/>
      <InformationGetCard/>
      <ProcessGetCreditCard/>
    </main>
  );
};
