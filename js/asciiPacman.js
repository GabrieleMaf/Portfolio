document.addEventListener("DOMContentLoaded", () => {
  const train = document.getElementById("ascii-train");
  const trainWidth = 600; // larghezza stimata del trenino in px
  let pos = -trainWidth;
  const speed = 2;

  function animate() {
    const max = window.innerWidth;
    train.style.transform = `translateX(${pos}px)`;
    pos += speed;
    if (pos > max) {
      pos = -trainWidth;
    }
    requestAnimationFrame(animate);
  }
  animate();
});