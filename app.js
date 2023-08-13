
const buttonFormSearch = document.querySelector("#searchBtn");
const buttonFormDelete = document.querySelector("#remove"); 

const GIPHY_API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
const URL_GIPHY = "https://api.giphy.com/v1/gifs/search";

async function getGiphyGif(url, q, api_key) {
  const res = await axios.get(url, { params: { q, api_key } });
  const random = randomNumberFromInterval(0, 30);
  renderGif(res.data.data[random].images.original.url);
}

function renderGif(url) {
  const gifArea = document.querySelector("#gif-area");

  let img = document.createElement("img");
  img.src = url;
  img.classList.add("image-giphy");
  gifArea.appendChild(img);
}

function deleteAllGif() {
  const gifs = document.querySelectorAll(".image-giphy");
  for (let gif of gifs) {
    gif.remove();
  }
}

function randomNumberFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

buttonFormSearch.addEventListener("click", function (e) {
  const giphySearchValue = document.querySelector("#search");
  getGiphyGif(URL_GIPHY, giphySearchValue.value, GIPHY_API_KEY);
  giphySearchValue.value = "";
  e.preventDefault();
});

buttonFormDelete.addEventListener("click", function (e) {
  deleteAllGif();
  e.preventDefault();
});