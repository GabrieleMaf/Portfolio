const setText = (id, text) => {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
};

const setSrc = (id, src) => {
  const el = document.getElementById(id);
  if (el) el.src = src;
};

const setHref = (id, href) => {
  const el = document.getElementById(id);
  if (el) el.href = href;
};

const setHtml = (id, html) => {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
};

const socialsHtml = (socials, email) =>
  Object.entries(socials)
    .map(
      ([key, social]) => `
    <a href="${social.url}" target="_blank" aria-label="${key.charAt(0).toUpperCase() + key.slice(1)}">
      <i class="${social.icon}"></i>
    </a>`
    )
    .join("") +
  `
  <a href="mailto:${email}" aria-label="Email">
    <i class="fas fa-envelope"></i>
  </a>
`;

export async function loadUserData() {
  try {
    const res = await fetch("assets/user.json");
    const data = await res.json();

    setText("hero-name", data.name);
    setSrc("profile-pic", data.image);
    setHtml(
      "footer-copyright",
      `&copy; 2025 ${data.name}. Tutti i diritti riservati.`
    );
    setHref("cv-link", data.cvUrl);
    setHtml("footer-socials", socialsHtml(data.socials, data.email));
  } catch (error) {
    console.error("Errore nel caricamento del footer:", error);
  }
}