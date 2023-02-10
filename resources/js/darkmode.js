const darkModeStorage = "darkMode";
let toggleDarkButton = document.getElementById("skinToggler");


initDarkMode();
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
}

toggleDarkButton.addEventListener("click", updateDarkmode);

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
/** Dark mode button event*/
function updateDarkmode()
{
    manageLocalStorageDarkMode();
    setTheme();
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


    if(localStorage.getItem(darkModeStorage) === "true")
    {
        document.documentElement.setAttribute(dataAttr, darkMode);
        myStyleSheet.setAttribute("href", darkSytle);
    }
    else
    {
        document.documentElement.setAttribute(dataAttr, lightMode);
        myStyleSheet.setAttribute("href", lightStyle);
    }
}