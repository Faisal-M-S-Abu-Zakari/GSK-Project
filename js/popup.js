const moviePopup = document.getElementById("moviePopup");
const closePopup = document.getElementById("closePopup");
const title = moviePopup.querySelector(".spider");
const rating = moviePopup.querySelector(".rating .score");
const desc = moviePopup.querySelector(".desc");
const image = moviePopup.querySelector("img");
const favBtn = moviePopup.querySelector(".glow-button");
let favList = JSON.parse(localStorage.getItem(FAV_KEY)) || [];
let id;
let isFav = false;
let movie;
const getDetailsPage = async (event) => {
  movie = await event.target.parentElement;
  moviePopup.style.display = "flex";
  title.textContent = movie.getAttribute("title");
  rating.textContent = `${Number(movie.getAttribute("rating")).toFixed(1)}/10`;
  desc.textContent = movie.getAttribute("desc");
  image.src = movie.getAttribute("image");
  id = await movie.getAttribute("id");
  await checkFav();
  changeFavBtn(isFav);
};

closePopup.onclick = () => {
  moviePopup.style.display = "none";
};

const checkFav = () => {
  favList = JSON.parse(localStorage.getItem(FAV_KEY)) || [];
  isFav = favList.some((ele) => +ele.id === +id);
};

const toggleMovie = () => {
  favList = JSON.parse(localStorage.getItem(FAV_KEY)) || [];
  if (isFav) {
    favList = favList.filter((ele) => +ele.id !== +id);
  } else {
    favList.push({
      id: movie.getAttribute("id"),
      title: movie.getAttribute("title"),
      desc: movie.getAttribute("desc"),
      image: movie.getAttribute("image"),
      rating: movie.getAttribute("rating"),
    });
  }
  localStorage.setItem(FAV_KEY, JSON.stringify(favList));
  isFav = !isFav;
};

const changeFavBtn = () => {
  if (isFav) {
    favBtn.innerHTML = `
      <i style="color: black;" class="bi bi-heart-fill"></i>
      <span style="color: black;">Remove From Your List</span>
    `;
    favBtn.classList.add("toggleFavorite");
  } else {
    favBtn.innerHTML = `
      <i class="bi bi-heart"></i>
      <span>ADD TO YOUR LIST</span>
    `;
    favBtn.classList.remove("toggleFavorite");
  }
};

favBtn.onclick = () => {
  toggleMovie();
  changeFavBtn();
};
