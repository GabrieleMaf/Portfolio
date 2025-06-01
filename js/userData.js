document.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch("assets/user.json");
    const data = await res.json();

    const heroName = document.getElementById("hero-name");
    if (heroName) heroName.textContent = data.name;

    const profilePic = document.getElementById("profile-pic");
    if (profilePic) profilePic.src = data.image;

    const copyright = document.getElementById("footer-copyright");
    copyright.innerHTML = `&copy; 2025 ${data.name}. Tutti i diritti riservati.`;

    const socials = document.getElementById("footer-socials");
    let socialsHtml = "";

    for (const key in data.socials) {
      const social = data.socials[key];
      socialsHtml += `
    <a href="${social.url}" target="_blank" aria-label="${key.charAt(0).toUpperCase() + key.slice(1)}">
      <i class="${social.icon}"></i>
    </a>
  `;
    }

    socialsHtml += `
  <a href="mailto:${data.email}" aria-label="Email">
    <i class="fas fa-envelope"></i>
  </a>
`;

    socials.innerHTML = socialsHtml;
  } catch (error) {
    console.error("Errore nel caricamento del footer:", error);
  }
});