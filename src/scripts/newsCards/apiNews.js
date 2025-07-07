import axios from 'axios';
import { isHTML } from './util';
import { correntDescription } from './util';
const apiKey = import.meta.env.VITE_API_KEY_NEWS;
const countNewsCard = 30
const maxNewsPageSize = 25

const fetchDataFromApi = async (currnetPage) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}&page=${currnetPage}&pageSize=${maxNewsPageSize}`
    );
    return response.data.articles || [];
  } catch (error) {
    console.error("Error loading data:", error);
    return [];
  }
};

const getValidNewsCard = async (countNewsCard) => {
  let ArrayValidNewsCard = []
  let diffLength = 0
  const titleLength = 87
  const descriptionLength = 250
  const limitNews = 100
  for (let page = 1; page < limitNews / maxNewsPageSize; page++) {
    const dataNewsCard = await fetchDataFromApi(page)
    
    if (dataNewsCard.length === 0) break
    if (ArrayValidNewsCard.length >= countNewsCard) break
    const filterDataNewsCard = dataNewsCard.filter((item) => {
      return item.urlToImage && item.url && item.description && item.title && item.title.length <= titleLength && item.description.length <= descriptionLength && !isHTML(item.description)
    })
    diffLength = countNewsCard - ArrayValidNewsCard.length
    ArrayValidNewsCard.push(...filterDataNewsCard.slice(0, diffLength))
  }
  if (ArrayValidNewsCard.length === 0) {
    return null
  }
  return ArrayValidNewsCard
}

const updateNewsCard = async (countNewsCard) => {
  let hmtlContent = ''
  const ArrayValidNewsCard = await getValidNewsCard(countNewsCard)

  for (let i = 0; i < Math.min(ArrayValidNewsCard.length, countNewsCard); i++) {
    const { urlToImage, url, description, title } = ArrayValidNewsCard[i]
    hmtlContent += `
    <article class="card">
          <div class="card__content">
            <figure id="card__img">
              <img src=${urlToImage} alt="not found" />
            </figure>
            <a class="card__title"  href=${url} target="_blank">${title}</a>
            <p class="card__subtitle">${correntDescription(description)}</p>
          </div>
        </article>`
  }
  document.getElementsByClassName("container-card")[0].innerHTML = hmtlContent
}
setTimeout(() => updateNewsCard(countNewsCard), 1000)
