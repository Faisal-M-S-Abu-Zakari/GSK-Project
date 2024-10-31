// let favList = JSON.parse(localStorage.getItem(FAV_KEY));
// console.log(favList);
// adding header links :
addHeaderMoviesLinks();

// get data from favList :
const showFav = () => {
  loadingActive();
  favList.map((ele) => {
    const moviesContainer = document.querySelector("section .container");
    moviesContainer.innerHTML += `
        <div class="movie-poster" style="text-align:center" onclick="getDetailsPage(event)" id="${
          ele.id
        }" title="${ele.title === undefined ? ele.name : ele.title}" rating="${
      ele.rating
    }" image="${ele.image}" desc="${ele.desc}">
                    <img src=${ele.image}}/>
                    <h3 style="width:200px">${
                      ele.title === undefined ? ele.name : ele.title
                    }</h3>
                </div>
      `;
  });
  loadingDisabled();
};
showFav();
