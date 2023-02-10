let backToTopbutton = document.getElementById("btn-back-to-top");

window.onscroll = function () 
{
  scrollFunction();
};

/** 
 * Display or hide button
 */  
function scrollFunction() 
{
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) 
  {
    backToTopbutton.style.display = "block";
  } 
  else 
  {
    backToTopbutton.style.display = "none";
  }
}
backToTopbutton.addEventListener("click", backToTop);

/** Brings the user back to the top of the page */
function backToTop() 
{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
