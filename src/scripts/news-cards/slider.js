const slider = document.querySelector(".container-card");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const arrCards = document.querySelectorAll(".card");
const totalCards = arrCards.length;
let currentIndex = 0;
let touchStartX = 0;
const containerStyle = getComputedStyle(slider);
const gap = parseInt(containerStyle.gap || 0);
const totalCardWidth = arrCards[0].offsetWidth + gap;
function updateButtons() {
  const visibleCardsCount = Math.max(1, Math.floor(slider.offsetWidth / totalCardWidth));
  prevBtn.disabled = currentIndex === 0;

  const maxIndex = totalCards - visibleCardsCount;
  console.log(slider.offsetWidth);
  nextBtn.disabled = currentIndex >= maxIndex;
}

function scrollToCard(index) {
  slider.scrollTo({
    left: totalCardWidth * index,
    behavior: "smooth",
  });
  currentIndex = index;
  updateButtons();
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    scrollToCard(currentIndex - 1);
  }
  
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < totalCards - 1) {
    scrollToCard(currentIndex + 1);
  }
  console.log("sdasd");

});

slider.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

slider.addEventListener("touchend", (e) => {
  const touchEndX = e.changedTouches[0].clientX;
  const diffValue = touchStartX - touchEndX;

  if (diffValue > 50 && currentIndex < totalCards - 1) {
    scrollToCard(currentIndex + 1);
  } else if (diffValue < -50 && currentIndex > 0) {
    scrollToCard(currentIndex - 1);
  }
});

updateButtons();
