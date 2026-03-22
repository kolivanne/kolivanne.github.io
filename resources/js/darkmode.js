const darkModeStorage = "darkMode";
let toggleDarkButton = document.getElementById("skinToggler");

/** Set dark mode value in localStorage */
function manageLocalStorageDarkMode() {
  if (localStorage.getItem(darkModeStorage) === "true") {
    localStorage.setItem(darkModeStorage, "false");
  } else {
    localStorage.setItem(darkModeStorage, "true");
  }
}

/** Load css file and sets theme */
function setTheme() {
  let myStyleSheet = document.querySelector(".my-style");
  const darkStyle = "resources/css/dark.css";
  const lightStyle = "resources/css/light.css";

  const lightMode = "light";
  const darkMode = "dark";
  const dataAttr = "data-bs-theme";
  const hrefAttr = "href";

  if (localStorage.getItem(darkModeStorage) === "true") {
    document.documentElement.setAttribute(dataAttr, darkMode);
    if (myStyleSheet) {
      myStyleSheet.setAttribute(hrefAttr, darkStyle);
    } else {
      console.warn("Dark mode stylesheet not found, skipping dark mode CSS.");
    }
  } else {
    document.documentElement.setAttribute(dataAttr, lightMode);
    if (myStyleSheet) {
      myStyleSheet.setAttribute(hrefAttr, lightStyle);
    } else {
      console.warn("Dark mode stylesheet not found, skipping light mode CSS.");
    }
  }
}

/** Dark mode button event */
function updateDarkmode() {
  manageLocalStorageDarkMode();
  setTheme();
}

/**
 * Create darkmode in localStorage if needed. 
 * True is default
 */
function initDarkMode() {
  if (localStorage.getItem(darkModeStorage) === null) {
    localStorage.setItem(darkModeStorage, "true");
  }
  setTheme();
}

initDarkMode();

// Attach button only if it exists
if (toggleDarkButton) {
  toggleDarkButton.addEventListener("click", updateDarkmode);
} else {
  console.warn("Dark mode toggle button not found, skipping event attachment.");
}