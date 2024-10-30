window.onload = async () => {
  const link = localStorage.getItem(LINK_KEY);
  const title = localStorage.getItem(TITLE_KEY);
  await fetchData(link);
  await addHeaderMoviesLinks();
  await updatePageTitle(title);
  // loading page display none
  await loadingDisabled();
};

const fetchData = async (link) => {
  const moviesContainer = document.querySelector("section .container");
  const res = await fetch(link);
  const data = await res.json();

  await data.results.map((ele) => {
    const imgUrl = `https://image.tmdb.org/t/p/w500${ele.poster_path}`;

    moviesContainer.innerHTML += `
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
      `;
  });
};

const updatePageTitle = (title) => {
  const titleContainer = document.querySelector("h1.section-title");
  titleContainer.textContent = title;
};
updatePageTitle();
