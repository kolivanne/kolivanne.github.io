let openCVButton = document.getElementById("openCV");
let cvContainer = document.getElementById("cvContent");

function createTimelineItem(job) 
{
  let highlightsHTML = "";

  for (let i = 0; i < job.highlights.length; i++) 
  {
    highlightsHTML += `<li>${job.highlights[i]}</li>`;
  }

  return `
    <div class="d-flex mb-4">

      <!-- Timeline marker -->
      <div class="me-3 text-center">
        <div class="bg-primary rounded-circle" style="width:12px; height:12px; margin-top:6px;"></div>
        <div style="width:2px; height:100%; background-color: #444; margin: 0 auto;"></div>
      </div>

      <!-- Content -->
      <div class="flex-grow-1">
        <div class="d-flex justify-content-between">
          <h5 class="mb-1">${job.role}</h5>
          <small class="text-muted">${job.period}</small>
        </div>

        <p class="mb-2"><strong>${job.company}</strong></p>

        <ul class="mb-0">
          ${highlightsHTML}
        </ul>
      </div>

    </div>
  `;
}

function loadCV() 
{
  let fullHTML = `
    <div class="container-fluid">
      <h4 class="mb-4">Work Experience</h4>
  `;

  for (let i = 0; i < cvData.length; i++) 
  {
    fullHTML += createTimelineItem(cvData[i]);
  }

  fullHTML += `</div>`;

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