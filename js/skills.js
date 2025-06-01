document.addEventListener("DOMContentLoaded", async () => {
  const grid = document.getElementById("skills-grid");

  try {
    const res = await fetch("assets/skills.json");
    const skills = await res.json();

    skills.forEach(skill => {
      const card = document.createElement("div");
      card.classList.add("skill-card");
      card.innerHTML = `
        <h3><i class="${skill.icon}"></i> ${skill.title}</h3>
        <p>${skill.description}</p>
      `;
      grid.appendChild(card);
    });
  } catch (error) {
    console.error("Errore nel caricamento delle competenze:", error);
  }
});
