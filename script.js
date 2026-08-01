// PERSONALIZA ESTOS TRES DATOS:
const CONFIG = {
  nombre: "Mi amor",
  firma: "Ansoni",
  mensajeFinal: "Flaca, gracias por estar aquí.
Estas semanas han sido maravillosas gracias a tu presencia, tu amor y tu ternura. Me encanta compartir contigo, conocerte cada día un poquito más y sentir que, sin darme cuenta, te has convertido en alguien muy especial para mí ❤️‍🩹."
};

const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const letterModal = document.getElementById("letterModal");
const xClose = document.getElementById("xClose");
const loveBtn = document.getElementById("loveBtn");
const finalMessage = document.getElementById("finalMessage");

document.getElementById("nombrePortada").textContent = CONFIG.nombre;
document.getElementById("nombreSobre").textContent = CONFIG.nombre;
document.getElementById("nombreCarta").textContent = CONFIG.nombre;
document.getElementById("firma").textContent = CONFIG.firma;

function openEnvelope() {
  envelope.classList.add("open");

  setTimeout(() => {
    letterModal.classList.add("visible");
    letterModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }, 650);
}

function closeLetter() {
  letterModal.classList.remove("visible");
  letterModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  finalMessage.textContent = "";

  setTimeout(() => {
    envelope.classList.remove("open");
  }, 250);
}

function createFloatingHeart() {
  const heart = document.createElement("span");
  heart.textContent = Math.random() > 0.35 ? "♥" : "♡";
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.fontSize = `${14 + Math.random() * 24}px`;
  heart.style.animationDuration = `${7 + Math.random() * 7}s`;
  document.querySelector(".background-hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 15000);
}

function celebrate() {
  finalMessage.textContent = CONFIG.mensajeFinal;

  for (let i = 0; i < 36; i++) {
    const heart = document.createElement("span");
    heart.className = "confetti-heart";
    heart.textContent = ["♥", "♡", "✨"][Math.floor(Math.random() * 3)];
    heart.style.left = "50vw";
    heart.style.top = "55vh";
    heart.style.fontSize = `${14 + Math.random() * 22}px`;
    heart.style.setProperty("--x", `${(Math.random() - .5) * 560}px`);
    heart.style.setProperty("--y", `${(Math.random() - .7) * 480}px`);
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1700);
  }
}

envelope.addEventListener("click", openEnvelope);
openBtn.addEventListener("click", openEnvelope);
closeBtn.addEventListener("click", closeLetter);
xClose.addEventListener("click", closeLetter);
loveBtn.addEventListener("click", celebrate);

letterModal.addEventListener("click", (event) => {
  if (event.target === letterModal) closeLetter();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLetter();
});

setInterval(createFloatingHeart, 650);
for (let i = 0; i < 8; i++) {
  setTimeout(createFloatingHeart, i * 180);
}
