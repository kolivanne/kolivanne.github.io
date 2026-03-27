function initCVFeature() 
{
  if (!featureFlags.cv) 
  {
    return;
  }

  createCVSection();
  createCVModal();
  initCVLogic();
}

function createCVSection() 
{
  let aboutHeadline = document.getElementById("about");
  let container = aboutHeadline.parentElement;

  let wrapper = document.createElement("div");
  wrapper.className = "d-flex justify-content-center gap-2 mt-4 flex-wrap";

  wrapper.innerHTML = `
    <button class="btn btn-primary" id="openCV">
      View CV
    </button>

    <a href="resources/cv.pdf" target="_blank" class="btn btn-outline-secondary">
      Download CV
    </a>
  `;

  container.appendChild(wrapper);
}

function createCVModal() 
{
  let modalWrapper = document.createElement("div");

  modalWrapper.innerHTML = `
    <div class="modal fade" id="cvModal" tabindex="-1">
      <div class="modal-dialog modal-lg modal-dialog-scrollable">
        <div class="modal-content">

          <div class="modal-header">
            <h5 class="modal-title">Curriculum Vitae</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <div class="modal-body" id="cvContent"></div>

        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modalWrapper);
}


function initCVLogic() 
{
  let scriptData = document.createElement("script");
  scriptData.src = "resources/js/data/cvData.js";

  let scriptLogic = document.createElement("script");
  scriptLogic.src = "resources/js/features/cv.js";

  document.body.appendChild(scriptData);
  document.body.appendChild(scriptLogic);
}

initCVFeature();