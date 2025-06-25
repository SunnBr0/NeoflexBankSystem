import axios from 'axios';
const apiKey = import.meta.env.VITE_API_KEY_NEWS;
const countNewsCard = 25
const fetchDataFromApi = async (currnetPage) => {
  const maxNewsPageSize = 20
  try {
    const response = await axios.get(
      // `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}&page=${currnetPage}&pageSize=${maxNewsPageSize}`
    );
    return response.data.articles || [];
  } catch (error) {
    console.error("Error loading data:", error);
    return [];
  }
};
const updateNewsCard = async () => {
  let hmtlContent = ''
  let validNewsCard = []

  for (let page = 1; page < countNewsCard; page++) {
    const dataNewsCard = await fetchDataFromApi(page)
    if (dataNewsCard.length === 0) break

    const filterDataNewsCard = dataNewsCard.filter((item) => {
      return item.urlToImage && item.url && item.description && item.title
    })
    validNewsCard.push(...filterDataNewsCard)
  }
  if (validNewsCard.length === 0) {
    return null
  }

  for (let i = 0; i < Math.min(validNewsCard.length, countNewsCard); i++) {
    const { urlToImage, url, description, title } = validNewsCard[i]
    hmtlContent += `
    <article class="card">
          <div class="card__content">
            <figure id="card__img">
              <img src=${urlToImage} alt="not found" />
            </figure>
            <a class="card__title" href=${url}>${title}</a>
            <p class="card__subtitle">${description}</p>
          </div>
        </article>`
  }
  document.getElementsByClassName("container-card")[0].innerHTML = hmtlContent
}
setTimeout(updateNewsCard, 1000)
