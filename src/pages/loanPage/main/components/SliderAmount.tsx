import { useEffect, useRef } from 'react';
import { words } from '../../../../lang/lang';
import { stringAmount } from '../../../../scripts/utils/utils';

type TSetAmount = {
  amount: number;
  onChangeAmount: (value: number) => void;
};

export const SliderAmount = ({ amount, onChangeAmount }: TSetAmount) => {
  const sliderRef = useRef<HTMLInputElement>(null);
  const min = 150000;
  const max = 600000;

  const updateProgress = (amount: number) => {
    if (sliderRef.current) {
      const percent = ((amount - min) / (max - min)) * 100;
      sliderRef.current.style.setProperty('--range-progress', `${percent}%`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    onChangeAmount(value);
    updateProgress(value);
  };

  useEffect(() => {
    updateProgress(amount);
  }, [amount]);

  return (
    <section className="slider-amount">
      <h2 className="slider-amount__header">
        {
          words.loanPage.processGetCreditCard.UK.onlineApplicationCreditCard
            .headerSlider
        }
      </h2>
      <p className="slider-amount__value">{stringAmount(amount)}</p>
      <input
        type="range"
        ref={sliderRef}
        min={min}
        max={max}
        id="amount"
        step={1000}
        onChange={handleChange}
        className="slider-amount__input"
        value={amount}
      />
      <div className="slider-amount__min-max">
        <p>{stringAmount(min)}</p>
        <p>{stringAmount(max)}</p>
      </div>
    </section>
  );
};
