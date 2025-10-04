// ---------- Textos letra por letra ----------
const titleText = "Conociéndote";
const line1Text = "Desde el primer momento que te vi, supe que algo en mi vida iba a cambiar 💕";
const line2Text = "Conociéndote, entendí lo que significa sonreír sin razón ✨";
const endingText = "Esto apenas empieza...";

function typeText(elementId, text, speed = 50, callback) {
  const el = document.getElementById(elementId);
  let i = 0;
  function type() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else if (callback) callback();
  }
  type();
}

// Iniciar escritura secuencial
typeText("title", titleText, 100, () => {
  typeText("line1", line1Text, 40, () => {
    typeText("line2", line2Text, 40, () => {
      typeText("ending", endingText, 80);
    });
  });
});

// ---------- Corazones flotando ----------
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}
setInterval(createHeart, 300);

// ---------- Mensajes sorpresa ----------
const mensajes = [
  "Tu sonrisa ilumina mi día 💕",
  "Eres única en el mundo ✨",
  "No puedo dejar de pensar en ti 😘",
  "Eres mi persona favorita 💖",
  "Contigo todo es magia 🌸"
];

setInterval(() => {
  const msg = document.createElement("div");
  msg.innerText = mensajes[Math.floor(Math.random() * mensajes.length)];
  msg.style.position = "fixed";
  msg.style.left = Math.random() * window.innerWidth + "px";
  msg.style.top = Math.random() * window.innerHeight + "px";
  msg.style.color = "#fff";
  msg.style.fontSize = "18px";
  msg.style.fontWeight = "bold";
  msg.style.textShadow = "0 0 5px #ff4d6d";
  msg.style.zIndex = 3;
  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 3000);
}, 4000);

// ---------- Confeti automático ----------
function activarConfeti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const corazones = [];
  for (let i = 0; i < 50; i++) {
    corazones.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 20 + 10,
      speed: Math.random() * 2 + 1
    });
  }

  function dibujar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    corazones.forEach(c => {
      ctx.font = c.size + "px Arial";
      ctx.fillText("❤️", c.x, c.y);
      c.y += c.speed;
      if (c.y > canvas.height) c.y = 0;
    });
    requestAnimationFrame(dibujar);
  }
  dibujar();
}

// Activar confeti después de 5 segundos
setTimeout(activarConfeti, 5000);

// ---------- Corazones al mover el mouse ----------
document.body.addEventListener("mousemove", (e) => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = e.pageX + "px";
  heart.style.top = e.pageY + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 2000);
});
