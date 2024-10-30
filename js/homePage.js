window.onload = async () => {
  await getCategories();
  await addHeaderMoviesLinks();
  await fetchTrending(trendingMoviesContainer, trendingMovies);
  await fetchTrending(trendingTVContainer, trendingTVShow);
  loadingDisabled();
};

const trendingMoviesContainer = document.getElementById(
  "trending-movies-container"
);
const trendingTVContainer = document.getElementById("trending-tv-container");
const categoriesContainer = document.getElementById("categories-container");

// const moviesLinksList = document.querySelector(".movie-Categories");

// const addHeaderMoviesLinks = async () => {
//   const res = await fetch(categories);
//   const data = await res.json();
//   data.genres.map((categ) => {
//     moviesLinksList.innerHTML += `<li><a class="movie-Categories-link" id="${categ.id}" onclick="openCategory(event)" href="#">${categ.name}</a></li>`;
//   });
// };

const fetchTrending = async (container, fetchLink) => {
  const res = await fetch(fetchLink);
  const data = await res.json();
  data.results.map((ele, index) => {
    if (index < 7) {
      const imgUrl = `https://image.tmdb.org/t/p/w500${ele.poster_path}`;

      container.insertAdjacentHTML(
        "beforeend",
        `
    <div class="movie-poster" style="text-align:center" onclick="getDetailsPage(event)" id="${
      ele.id
    }" title="${ele.title === undefined ? ele.name : ele.title}" rating="${
          ele.vote_average
        }" image="${imgUrl}" desc="${ele.overview}">
                    <img src=${imgUrl}}/>
                    <h3 style="width:200px">${
                      ele.title === undefined ? ele.name : ele.title
                    }</h3>
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
<<<<<<< HEAD
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
=======

// Scroll to Top Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button after scrolling down 100vh
window.onscroll = function () {
  if (
    document.body.scrollTop > window.innerHeight ||
    document.documentElement.scrollTop > window.innerHeight
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
>>>>>>> 27ccb1b681f7b911ffd8da6814bf53b707eb2148
};

// Smooth scroll to top function
function scrollToTop() {
<<<<<<< HEAD
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
=======
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

//function to open all trending movies
const allTrendingTV = () => {
  updateLocalStorageLink("Trending TV Show", trendingTVShow);
  window.location.href = "searchResultsPage.html";
};

const allTrendingMovies = () => {
  updateLocalStorageLink("Trending Movies", trendingMovies);
  window.location.href = "searchResultsPage.html";
};
>>>>>>> 27ccb1b681f7b911ffd8da6814bf53b707eb2148
