const API_KEY = "361d64fd3103c792f86172bac9806914";
const categories = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
const trendingMovies = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
const trendingTVShow = `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`;
const trendingMoviesContainer = document.getElementById(
  "trending-movies-container"
);
const trendingTVContainer = document.getElementById("trending-tv-container");
const categoriesContainer = document.getElementById("categories-container");
const moviesLinksList = document.querySelector(".movie-Categories");

const addHeaderMoviesLinks = async () => {
  const res = await fetch(categories);
  const data = await res.json();
  console.log(data);

  data.genres.map((categ) => {
    moviesLinksList.innerHTML += `<li><a class="movie-Categories-link" id="${categ.id}" onclick="openCategory(event)" href="#">${categ.name}</a></li>`;
  });
};

const fetchTrending = async (container, fetchLink) => {
  const res = await fetch(fetchLink);
  const data = await res.json();
  data.results.map((movie, index) => {
    if (index < 7) {
      container.insertAdjacentHTML(
        "beforeend",
        `
      <div class="movie-poster">
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
      <h3>${movie.title === undefined ? movie.name : movie.title}</h3>
      </div>
      `
      );
    }
  });
};

const getCategories = async () => {
  const res = await fetch(categories);
  const data = await res.json();
  data.genres.map((categ) => {
    categoriesContainer.innerHTML += `
    <div onclick="openCategory(event)" class="categ-card" id="${categ.id}">${categ.name}</div>
    `;
  });
};
getCategories();
addHeaderMoviesLinks();
fetchTrending(trendingMoviesContainer, trendingMovies);
fetchTrending(trendingTVContainer, trendingTVShow);
// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show the button after scrolling down 100vh
window.onscroll = function() {
    if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Smooth scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}