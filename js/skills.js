export async function loadSkills() {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;

  try {
    const res = await fetch("assets/skills.json");
    const skills = await res.json();

    const createCard = skill => {
      const card = document.createElement("div");
      card.classList.add("skill-card");
      card.innerHTML = `<h3><i class="${skill.icon}"></i> ${skill.title}</h3><p>${skill.description}</p>`;
      card.style.cursor = "pointer";
      card.addEventListener("click", () => window.open(skill.documentation, "_blank"));
      return card;
    };

    const cards = skills.map(createCard);
    cards.forEach(card => grid.appendChild(card));
  } catch (error) {
    console.error("Errore nel caricamento delle competenze:", error);
  }
}
