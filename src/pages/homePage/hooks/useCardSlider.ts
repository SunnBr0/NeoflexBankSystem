import { useEffect } from 'react';

type TCardSlider = {
  sliderRef: React.RefObject<HTMLDivElement | null>;
  prevBtnRef: React.RefObject<HTMLButtonElement | null>;
  nextBtnRef: React.RefObject<HTMLButtonElement | null>;
  arrCardsClassName: string;
  cardsCount: number;
};

export const useCardSlider = ({
  sliderRef,
  prevBtnRef,
  nextBtnRef,
  arrCardsClassName,
  cardsCount = 0,
}: TCardSlider) => {
  useEffect(() => {
    const slider = sliderRef.current;
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;
    if (cardsCount === 0) return;
    if (!slider || !prevBtn || !nextBtn) return;
    const arrCards = document.querySelectorAll(arrCardsClassName);
    const totalCards = arrCards.length;
    let currentIndex = 0;
    let touchStartX = 0;
    const containerStyle = getComputedStyle(slider);
    const gap = parseInt(containerStyle.gap || '0');
    const totalCardWidth = (arrCards[0] as HTMLElement).offsetWidth + gap;

    function updateButtons() {
      if (!slider || !prevBtn || !nextBtn) return;

      const visibleCardsCount = Math.max(
        1,
        Math.floor(slider.offsetWidth / totalCardWidth)
      );
      const maxIndex = totalCards - visibleCardsCount;
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex >= maxIndex;
    }

    function scrollToCard(index: number) {
      if (!slider) return;
      slider.scrollTo({
        left: totalCardWidth * index,
        behavior: 'smooth',
      });
      currentIndex = index;
      updateButtons();
    }
    const handlePrevClick = () => {
      if (currentIndex > 0) scrollToCard(currentIndex - 1);
    };
    const handleNextClick = () => {
      if (currentIndex < totalCards - 1) scrollToCard(currentIndex + 1);
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diffValue = touchStartX - touchEndX;

      if (diffValue > 50 && currentIndex < totalCards - 1) {
        scrollToCard(currentIndex + 1);
      } else if (diffValue < -50 && currentIndex > 0) {
        scrollToCard(currentIndex - 1);
      }
    };

    prevBtn.addEventListener('click', handlePrevClick);
    nextBtn.addEventListener('click', handleNextClick);
    slider.addEventListener('touchstart', handleTouchStart);
    slider.addEventListener('touchend', handleTouchEnd);
    updateButtons();

    return () => {
      prevBtn.removeEventListener('click', handlePrevClick);
      nextBtn.removeEventListener('click', handleNextClick);
      slider.removeEventListener('touchstart', handleTouchStart);
      slider.removeEventListener('touchend', handleTouchEnd);
    };
  }, [arrCardsClassName, nextBtnRef, prevBtnRef, sliderRef, cardsCount]);
};
