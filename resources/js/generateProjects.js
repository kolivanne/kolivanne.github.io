function renderProjects(containerId = "work-projects", projectsArray = projects) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  projectsArray.forEach(p => {
    const col = document.createElement("div");
    col.className = "col-md-6 mb-3";

    // Badges HTML
    const badgesHtml = p.badges.map(b => {
      const annotation = b.note ? `data-note="${b.note}" class="badge text-bg-${b.color} annotation"` : `class="badge text-bg-${b.color}"`;
      return `<span ${annotation}>${b.text}</span>`;
    }).join(" ");

    // Engineering notes HTML
    const notesHtml = p.notes && p.notes.length
      ? `<div class="small text-muted mb-3"><strong>Engineering Notes:</strong><ul class="mb-0">${p.notes.map(n => `<li>${n}</li>`).join("")}</ul></div>`
      : "";

    col.innerHTML = `
      <div class="card h-100 d-flex flex-column">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${p.title} <span class="text-muted small">${p.subtitle}</span></h5>
          <div class="d-flex flex-wrap gap-2 mb-2">${badgesHtml}</div>
          <p class="card-text">${p.description}</p>
          ${notesHtml}
          <div class="mt-auto">
            <a class="btn btn-primary w-100" target="_blank" href="${p.github}">Explore on GitHub →</a>
          </div>
        </div>
      </div>
    `;

    container.appendChild(col);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initAnnotations();
});