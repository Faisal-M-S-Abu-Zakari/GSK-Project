const updateLocalStorageLink = (title, link) => {
  localStorage.setItem(TITLE_KEY, title);
  localStorage.setItem(LINK_KEY, link);
};

const openCategory = async (event) => {
  const categoryID = await event.target.getAttribute("id");
  const link =
    await `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${categoryID}`;
  const title = await event.target.textContent;
  await updateLocalStorageLink(title, link);
  window.location.href = "searchResultsPage.html";
};
