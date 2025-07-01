export function initBurgerMenu() {
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('nav-links');

  const toggleMenu = e => {
    e.stopPropagation();
    navLinks.classList.toggle('show');
  };

  const stopPropagation = e => e.stopPropagation();

  const closeMenu = () => navLinks.classList.remove('show');

  burger.addEventListener('click', toggleMenu);
  navLinks.addEventListener('click', stopPropagation);
  document.addEventListener('click', closeMenu);
}