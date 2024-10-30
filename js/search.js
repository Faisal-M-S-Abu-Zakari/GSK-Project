// const searchField = document.getElementById("search-bar");
// let term;

const searchApi = async (event) => {
  const searchResList = document.getElementById("search-res-list");
  const searchField = event.target;
  searchResList.innerHTML = ``;
  // console.log(searchField);
  const searchByTemp = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchField.value}&page=1&include_adult=false`;
  await fetch(searchByTemp)
    .then((res) => res.json())
    .then((data) =>
      data.results.map((ele, index) => {
        if (index < 5) {
          const imgUrl = `https://image.tmdb.org/t/p/w500${ele.poster_path}`;
          searchResList.innerHTML += `
       <li onclick="getDetailsPage(event)" id="${ele.id}" title="${
            ele.title === undefined ? ele.name : ele.title
          }" rating="${ele.vote_average}" image="${imgUrl}" desc="${
            ele.overview
          }">
          <div class="cover"></div>
                            <img src="${imgUrl}" alt="movie img">
                            <div>
                                <h5>${
                                  ele.title === undefined ? ele.name : ele.title
                                }</h5>
                                <p>${ele.release_date.slice(0, 4)}</p>
                            </div>
                        </li>
      `;
        }
      })
    );
};

const openSearchResPage = () => {
  const searchField = document.querySelector("input");
  if (searchField.value.trim() != "") {
    const searchByTemp = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchField.value}&page=1&include_adult=false`;
    updateLocalStorageLink(`Result of "${searchField.value}"`, searchByTemp);
    window.location.href = "searchResultsPage.html";
  }
};
