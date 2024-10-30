// loading page
// window.onload = function () {
//   // Hide the loading container

//   // Show the main content
//   document.querySelector("header").style.display = "flex";
//   document.querySelector("main").style.display = "block";
// };

const loadingActive = () => {
  document.querySelector(".loading-container").style.display = "flex";
};

const loadingDisabled = () => {
  document.querySelector(".loading-container").style.display = "none";
};
