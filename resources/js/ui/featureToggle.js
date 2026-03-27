let cvSection = document.getElementById("cvSection");


function applyFeatureFlags() 
{
  if (featureFlags.cv) 
  {
    cvSection.style.display = "block";
  } 
  else 
  {
    cvSection.style.display = "none";
  }
}

applyFeatureFlags();