const me1 = document.querySelector("#imgA");
const me2 = document.querySelector("#imgB");

window.addEventListener("deviceorientation", (evt) => {
  const angle = evt.beta;
  const opacity = Math.min(1, Math.max(0, invLerp(50, 70, angle)));
  me2.style.opacity = opacity;
  me1.style.opacity = 1 - opacity;
  console.log(opacity);
});

function invLerp(a, b, val) {
  return (val - a) / (b - a);
}
