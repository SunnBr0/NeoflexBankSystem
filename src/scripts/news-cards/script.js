import axios from 'axios';
const fetchDataFromApi = async (currnet) => {
  try {
    const response = await axios.get(
      `https://api.slingacademy.com/v1/sample-data/photos/${currnet}`
    );
    const imageUrl = response.data.photo.url;
    const titleUrl = response.data.photo.title;
    const descriptionUrl = response.data.photo.description;

    return { imageUrl, titleUrl, descriptionUrl };
  } catch (error) {
    console.error("Error loading image:", error);
    return null;
  }
};

setTimeout(async () => {

  const arrCards = document.querySelectorAll(".card");
  const countCard = arrCards.length;

  for (let i = 0; i < countCard; i++) {
    const card = arrCards[i];
    let srcImage = card.querySelector("img");
    let title = card.querySelector(".card__title");
    let subtitle = card.querySelector(".card__subtitle");
    try {
      const { imageUrl, titleUrl, descriptionUrl } = await fetchDataFromApi(
        i + 1
      );
      srcImage.src = imageUrl;
      title.innerHTML = titleUrl;
      subtitle.innerHTML = descriptionUrl;
    } catch {
      console.error("Error updating card:", error);
    }
  }
}, 1000)


