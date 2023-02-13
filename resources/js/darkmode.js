const darkModeStorage = "darkMode";
let toggleDarkButton = document.getElementById("skinToggler");

/** Set dark mode value in localStorage*/
function manageLocalStorageDarkMode()
{
    if(localStorage.getItem(darkModeStorage) === "true")
    {
        localStorage.setItem(darkModeStorage, "false");
    }
    else
    {
        localStorage.setItem(darkModeStorage, "true");
    }
}

/** Load css file and sets theme*/
function setTheme()
{
    let myStyleSheet = document.querySelector(".my-style");
    const darkSytle = "resources/css/dark.css";
    const lightStyle = "resources/css/light.css"

    const lightMode = "light";
    const darkMode = "dark";
    const dataAttr = "data-bs-theme";
    const hrefAttr = "href";


    if(localStorage.getItem(darkModeStorage) === "true")
    {
        document.documentElement.setAttribute(dataAttr, darkMode);
        myStyleSheet.setAttribute(hrefAttr, darkSytle);
    }
    else
    {
        document.documentElement.setAttribute(dataAttr, lightMode);
        myStyleSheet.setAttribute(hrefAttr, lightStyle);
    }
}

/** Dark mode button event*/
function updateDarkmode()
{
    manageLocalStorageDarkMode();
    setTheme();
}

/**
 *  Create darkmode in localStorage if needed. 
 * True is default
 */
function initDarkMode()
{
  if(localStorage.getItem(darkModeStorage) === null)
  {
    localStorage.setItem(darkModeStorage, "true");
  }
  setTheme();
}

initDarkMode();
toggleDarkButton.addEventListener("click", updateDarkmode);