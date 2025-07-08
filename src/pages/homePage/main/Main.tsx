import { CreditCard } from './components/CreditCard';
import { CurrencyCard } from './components/CurrencyCard';
import { FeatureInfo } from './components/FeatureInfo';
import { MapSection } from './components/MapSection';
import { NewsCards } from './components/NewsCards';
import { Support } from './components/Support';

export const Main = () => {
  
  return (
    <main>
      <CreditCard />
      <FeatureInfo/>
      <CurrencyCard />
      <MapSection/>
      <NewsCards/>
      <Support/>
    </main>
  );
};
