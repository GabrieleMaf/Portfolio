export async function loadProjects() {
  const getEl = id => document.getElementById(id);
  const grid = getEl("projects-grid");
  const modal = getEl("project-modal");
  const title = getEl("modal-title");
  const carousel = getEl("carousel");
  const downloadLink = getEl("download-link");
  const githubLink = getEl("github-link");
  const closeBtn = document.querySelector(".close-btn");

  const fetchProjects = () =>
    fetch("assets/projects.json").then(res => res.json());

  const createCard = proj => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <h3><i class="${proj.icon}"></i> ${proj.title}</h3>
      <p>${proj.description}</p>
    `;
    card.addEventListener("click", () => showModal(proj));
    return card;
  };

  const showModal = proj => {
    title.textContent = proj.title;
    downloadLink.href = proj.downloadUrl;
    githubLink.href = proj.repoUrl;
    carousel.innerHTML = proj.images
      .map(src => `<img src="${src}" alt="${proj.title}" />`)
      .join("");
    modal.classList.remove("hidden");
  };

  const hideModal = () => modal.classList.add("hidden");

  closeBtn.addEventListener("click", hideModal);

  const projects = await fetchProjects();
  grid.innerHTML = "";
  projects.map(createCard).forEach(card => grid.appendChild(card));
}