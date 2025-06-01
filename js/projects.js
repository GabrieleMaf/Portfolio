document.addEventListener("DOMContentLoaded", async () => {
    const grid = document.getElementById("projects-grid");
    const modal = document.getElementById("project-modal");
    const title = document.getElementById("modal-title");
    const carousel = document.getElementById("carousel");
    const downloadLink = document.getElementById("download-link");
    const closeBtn = document.querySelector(".close-btn");

    const res = await fetch("assets/projects.json");
    const projects = await res.json();

    projects.forEach((proj, index) => {
        const card = document.createElement("div");
        card.classList.add("project-card");
        card.innerHTML = `
      <h3><i class="${proj.icon}"></i> ${proj.title}</h3>
      <p>${proj.description}</p>
    `;
        card.addEventListener("click", () => {
            title.innerText = proj.title;
            downloadLink.href = proj.downloadUrl;
            carousel.innerHTML = proj.images
                .map(src => `<img src="${src}" alt="${proj.title}" />`)
                .join("");
            modal.classList.remove("hidden");
        });
        grid.appendChild(card);
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
    });
});

