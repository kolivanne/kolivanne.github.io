let footerCopyrightSpan = document.querySelector(".copyright-year");

/**Create footer text with current year */
function writeFooterCopyrightAndText()
{
    let text = "Copyright &copy; ";
    let currentYear = new Date().getFullYear();
    let text2 = ". Built with patience and discipline by <span>Anne</span> &#128156; <br>"
    return text + currentYear + text2;
}
/**Add class 'my-font' to span tag */
function addClassNametoFirstNameSpan()
{
    const customClass = "my-font";
    let firstNameSpan = document.querySelector(".copyright-year span");
    if(firstNameSpan === null)
    {
        console.log("Empty first name <span> in footer, unable to add class 'my-font'.")
    }
    else
    {
        firstNameSpan.classList.add(customClass);
    }
}

footerCopyrightSpan.innerHTML = writeFooterCopyrightAndText();
addClassNametoFirstNameSpan();





