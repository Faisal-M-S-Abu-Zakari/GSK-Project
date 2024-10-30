const moviesLinksList = document.querySelector(".movie-Categories");

const addHeaderMoviesLinks = async () => {
  const res = await fetch(categories);
  const data = await res.json();
  data.genres.map((categ) => {
    moviesLinksList.innerHTML += `<li><a class="movie-Categories-link" id="${categ.id}" onclick="openCategory(event)" href="#">${categ.name}</a></li>`;
  });
};
