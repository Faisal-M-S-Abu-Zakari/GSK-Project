const darkThemeIcon = document.getElementById("dark-icon");
const lightThemeIcon = document.getElementById("light-icon");

// Change theme function
const changeTheme = () => {
  const currentTheme = checkThemeStorage();
  currentTheme === "light" ? toggleDarkTheme() : toggleLightTheme();
};

// Check theme storage and set default if none exists
const checkThemeStorage = () => {
  const storedTheme = localStorage.getItem(THEME_KEY);
  if (storedTheme === null) {
    localStorage.setItem(THEME_KEY, "light");
    return "light";
  }
  return storedTheme;
};

// Toggle light theme
const toggleLightTheme = () => {
  lightThemeIcon.classList.add("active");
  darkThemeIcon.classList.remove("active");
  document.body.classList.remove("dark-theme");
  localStorage.setItem(THEME_KEY, "light");
};

// Toggle dark theme
const toggleDarkTheme = () => {
  darkThemeIcon.classList.add("active");
  lightThemeIcon.classList.remove("active");
  document.body.classList.add("dark-theme");
  localStorage.setItem(THEME_KEY, "dark");
};

// Apply the correct theme when the page loads
const applyStoredTheme = () => {
  const storedTheme = checkThemeStorage();
  storedTheme === "dark" ? toggleDarkTheme() : toggleLightTheme();
};

// Event listener for theme toggle (e.g., a button or icon)
darkThemeIcon.addEventListener("click", changeTheme);
lightThemeIcon.addEventListener("click", changeTheme);

// Apply the theme on page load
applyStoredTheme();
