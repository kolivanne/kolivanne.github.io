let openCVButton = document.getElementById("openCV");
let cvContainer = document.getElementById("cvContent");

function createJobHTML(job) 
{
  let highlightsHTML = "";

  for (let i = 0; i < job.highlights.length; i++) 
  {
    highlightsHTML += `<li>${job.highlights[i]}</li>`;
  }

  return `
    <div class="mb-4">
      <h5>${job.role}</h5>
      <p><strong>${job.company}</strong></p>
      <p>${job.period}</p>
      <ul>
        ${highlightsHTML}
      </ul>
    </div>
  `;
}

function loadCV() 
{
  let fullHTML = "";

  for (let i = 0; i < cvData.length; i++) 
  {
    fullHTML += createJobHTML(cvData[i]);
  }

  cvContainer.innerHTML = fullHTML;
}

function openModal() 
{
  loadCV();

  let modalElement = document.getElementById("cvModal");
  let modal = new bootstrap.Modal(modalElement);

  modal.show();
}

openCVButton.addEventListener("click", openModal);