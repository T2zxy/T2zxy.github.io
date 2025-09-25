const txt = "读研生活 · 记录点滴";
let i = 0;
const speed = 120; // ms per character

function type() {
  if (i < txt.length) {
    document.querySelector('.typing').textContent += txt.charAt(i);
    i++;
    setTimeout(type, speed);
  }
}
window.addEventListener('load', type);