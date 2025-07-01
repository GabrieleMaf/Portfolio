const addClass = (el, cls) => el.classList.add(cls);

const observeSections = (sections, observer) =>
  sections.forEach(section => {
    addClass(section, "section-hidden");
    observer.observe(section);
  });

export function initSectionAnimations() {
  const sections = document.querySelectorAll("section");
  const onIntersect = entries =>
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        addClass(entry.target, "section-visible");
        observer.unobserve(entry.target);
      }
    });

  const observer = new IntersectionObserver(onIntersect, { threshold: 0.15 });
  observeSections(sections, observer);
}

const setTrainPosition = (el, pos) =>
  (el.style.transform = `translateX(${pos}px)`);

const getNextPos = (pos, speed, max, trainWidth) =>
  pos > max ? -trainWidth : pos + speed;

export function initAsciiTrain() {
  const train = document.getElementById("ascii-train");
  const trainWidth = 600;
  const speed = 2;
  let pos = -trainWidth;

  (function animate() {
    setTrainPosition(train, pos);
    pos = getNextPos(pos, speed, window.innerWidth, trainWidth);
    requestAnimationFrame(animate);
  })();
}