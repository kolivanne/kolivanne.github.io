function renderProjects(containerId = "work-projects", projectsArray = projects) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  const grouped = groupProjects(projectsArray);

  Object.entries(grouped).forEach(([category, projects]) => {
    renderSection(container, category, projects);
  });

  initProjectToggles();
  hydrateGitHubMeta(projectsArray);
}

function groupProjects(projects) {
  return projects.reduce((acc, project) => {
    const category = project.category || "Projects";

    if (!acc[category]) {
      acc[category] = [];
    }

    acc[category].push(project);
    return acc;
  }, {});
}

function renderSection(container, category, projects) {
  const section = document.createElement("div");
  section.className = "mb-5";

  const rowId = `row-${category.replace(/\s+/g, "-").toLowerCase()}`;

  section.innerHTML = `
    <h4 class="fw-bold mb-3">${category}</h4>
    <div class="row g-3" id="${rowId}"></div>
  `;

  const row = section.querySelector(".row");

  projects.forEach(p => {
    row.appendChild(createProjectCard(p));
  });

  container.appendChild(section);
}

function createProjectCard(p) {
  const col = document.createElement("div");
  col.className = "col-md-6 mb-3";

  const badgesHtml = p.badges.map(b => {
    const annotation = b.note
      ? `data-note="${b.note}" class="badge text-bg-${b.color} annotation"`
      : `class="badge text-bg-${b.color}"`;

    return `<span ${annotation}>${b.text}</span>`;
  }).join(" ");

  const notesHtml = (p.notes && p.notes.length) || p.repo
    ? `<div class="notes d-none mt-2">
        <div class="small text-muted mb-3">
          <strong>Engineering Notes:</strong>
          <ul class="mb-0">
            ${p.repo ? `<li id="meta-${p.repo}">Last updated: ...</li>` : ""}
            ${(p.notes || []).map(n => `<li>${n}</li>`).join("")}
          </ul>
        </div>
      </div>`
    : "";

  col.innerHTML = `
    <div class="card h-100 d-flex flex-column">
      <div class="card-body d-flex flex-column">

        <h5 class="card-title">
          ${p.title}
        </h5>

        <div class="d-flex flex-wrap gap-2 mb-2">
          ${badgesHtml}
        </div>

        <p class="card-text">
          ${p.description}
        </p>

        <div class="mt-3 mb-3">
          <button class="btn btn-sm btn-outline-secondary toggle-notes">
            Show engineering details
          </button>

          ${notesHtml}
        </div>

        <div class="mt-auto">
          <a class="btn btn-primary w-100" target="_blank" href="${p.github}">
            Explore on GitHub →
          </a>
        </div>

      </div>
    </div>
  `;

  return col;
}

function initProjectToggles() {
  document.querySelectorAll(".toggle-notes").forEach(btn => {
    btn.addEventListener("click", () => {
      const notes = btn.nextElementSibling;
      if (!notes) return;

      const isHidden = notes.classList.contains("d-none");

      notes.classList.toggle("d-none");

      btn.textContent = isHidden
        ? "Hide engineering details"
        : "Show engineering details";
    });
  });
}

async function hydrateGitHubMeta(projectsArray) {
  projectsArray.forEach(async (p) => {
    if (!p.repo) return;

    const metaEl = document.getElementById(`meta-${p.repo}`);
    if (!metaEl) return;

    const lastUpdate = await fetchLastCommit(p.repo);

    metaEl.textContent = lastUpdate
      ? `Last updated: ${lastUpdate}`
      : "Last updated: n/a";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initAnnotations();
});