import { initBurgerMenu } from './burgerMenu.js';
import { loadSkills } from './skills.js';
import { loadProjects } from './projects.js';
import { loadUserData } from './userData.js';
import { initSectionAnimations, initAsciiTrain } from './animation.js';

document.addEventListener("DOMContentLoaded", async () => {
  initBurgerMenu();
  initSectionAnimations();
  initAsciiTrain();
  await loadSkills();
  await loadProjects();
  await loadUserData();
});
