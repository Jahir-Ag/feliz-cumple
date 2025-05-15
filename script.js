const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas(); // Llama al principio
  

class Firework {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.targetY = Math.random() * canvas.height / 2;
    this.color = color;
    this.exploded = false;
    this.particles = [];
  }

  update() {
    if (!this.exploded) {
      this.y -= 4;
      if (this.y <= this.targetY) {
        this.explode();
      }
    } else {
      this.particles.forEach(p => p.update());
    }
  }

  explode() {
    this.exploded = true;
    for (let i = 0; i < 30; i++) {
      this.particles.push(new Particle(this.x, this.y, this.color));
    }
  }

  draw() {
    if (!this.exploded) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    } else {
      this.particles.forEach(p => p.draw());
    }
  }
}

class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.vx = Math.random() * 4 - 2;
    this.vy = Math.random() * 4 - 2;
    this.alpha = 1;
    this.color = color;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 0.02;
  }

  draw() {
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

let fireworks = [];

function animate() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (Math.random() < 0.05) {
    let x = Math.random() * canvas.width;
    let y = canvas.height;
    let colors = ['#ff0080', '#00ffe5', '#ffff00', '#ff6600'];
    let color = colors[Math.floor(Math.random() * colors.length)];
    fireworks.push(new Firework(x, y, color));
  }

  fireworks.forEach((fw, index) => {
    fw.update();
    fw.draw();
    if (fw.exploded && fw.particles.every(p => p.alpha <= 0)) {
      fireworks.splice(index, 1);
    }
  });

  requestAnimationFrame(animate);
}

animate();

const messages = [
   
    "Hay momentos en la vida en los que tienes que luchar por lo que crees 💪", "No importa lo lejos que estemos, nuestros corazones siempre estarán conectados ❤️🔗", "Una promesa es una promesa 🤝", "La felicidad no es algo que se encuentra, sino algo que se crea ✨😊", "El miedo no es real. Es un producto de tus pensamientos 💭🚫", "No hay vergüenza en huir, si es para proteger algo importante 🛡️💖", "El coraje es la magia que convierte los sueños en realidad 🌟💫", "Incluso en la oscuridad más profunda, siempre hay una luz 💡🌑", "Las cicatrices nos recuerdan que nuestro pasado fue real 🩹⏳", "No te arrepientas de nada en la vida. Aprende de ello 🌱📚", "El amor puede florecer incluso en los campos de batalla 🌸⚔️", "Nuestros lazos son más fuertes que cualquier adversidad 🔗🛡️", "Siempre estaré a tu lado, sin importar qué рядом 🥰", "Tu sonrisa es mi mayor tesoro 😊💎", "Encontré mi lugar en el mundo cuando te conocí 🌎❤️", "Eres la melodía de mi corazón 🎶💖", "Cada momento contigo es un regalo 🎁😊", "Tu amor me da fuerzas para seguir adelante 💪❤️", "Juntos podemos superar cualquier obstáculo 🤝⛰️", "Eres la luz que ilumina mi camino 🌟🛤️", "Mi corazón late solo por ti 💓🥰", "En tus ojos encuentro mi hogar 👀🏡", "Tu voz es la canción que quiero escuchar siempre 🎤💖", "Eres la pieza que faltaba en mi rompecabezas 🧩❤️", "Amarte es mi mayor aventura 🚀💖", "Quiero pasar cada día de mi vida contigo 🗓️❤️", "Tu felicidad es mi mayor prioridad 😊🥇", "Eres la razón de mi sonrisa cada mañana 😄☀️", "Mi amor por ti es infinito e incondicional ∞❤️", "En tus brazos encuentro la paz 🤗🕊️", "Eres mi inspiración constante ✨💖", "Quiero construir un futuro a tu lado 🏗️❤️", "Tu amor me hace una mejor persona ❤️⬆️", "Eres mi sueño hecho realidad 💭💖", "Siempre te elegiré a ti ❤️➡️", "Mi corazón te pertenece por completo 💖🔒", "Eres la persona más importante en mi vida ❤️👑", "Amarte es lo más hermoso que me ha pasado 🥰💖", "Quiero proteger tu sonrisa para siempre 😊🛡️", "Tu presencia hace que todo sea mejor ✨⬆️", "Eres mi sol en los días grises ☀️🌧️", "Mi amor por ti crece cada día más 🌱💖", "Encontré mi paraíso en tus brazos 🏝️🤗", "Eres la respuesta a todas mis preguntas 🤔➡️💡", "Quiero envejecer contigo 👵👴❤️", "Tu amor es mi mayor bendición 🙏💖", "Eres la estrella que guía mi noche 🌟🌃", "Mi amor por ti es eterno como el universo 🌌❤️", "En cada latido de mi corazón estás tú 💓🥰", "Eres el aire que respiro 🌬️💖", "Amarte es mi mayor alegría 😄💖", "Quiero compartir cada instante contigo ⏳❤️", "Tu amor me da alas para volar 🦋💖", "Eres la magia en mi vida ✨💖", "Mi corazón siempre buscará el tuyo 💖➡️💖", "Amarte es mi destino ❤️➡️🗺️", "Quiero hacerte feliz cada día 😊💖", "Tu amor es mi mayor fuerza 💪💖", "Eres la persona que siempre esperé 🥰💖", "Mi amor por ti es inmenso como el mar 🌊❤️", "En tus manos encuentro seguridad 🙌💖", "Eres mi refugio en la tormenta ⛈️", "Amarte es mi mayor aventura 🗺️💖", "Quiero explorar el mundo contigo 🌍❤️", "Tu amor es mi mayor inspiración 💖💡", "Eres la melodía que nunca quiero que termine 🎶♾️", "Mi corazón canta tu nombre 💖🎤", "Amarte es mi más bella adicción 🥰💖", "Quiero construir nuestro propio cuento de hadas 🏰💖", "Tu amor es la llave de mi corazón 🔑💖", "Eres la persona que completa mi alma 💖🧩", "Mi amor por ti es un fuego eterno 🔥❤️", "En tus besos encuentro el paraíso 💋😇", "Eres mi todo y mucho más ❤️➕", "Amarte es mi mayor regalo 🎁💖", "Quiero pasar la eternidad a tu lado ∞💖", "Tu amor es la luz de mi vida 💡💖", "Eres la persona que siempre soñé 💭💖", "Mi corazón late al ritmo de tu amor 💖🥁", "Amarte es mi verdad más profunda ❤️💯", "Quiero construir un hogar contigo 🏡💖", "Tu amor es mi mayor tesoro 💎💖", "Eres la persona que me hace feliz 😊💖", "Mi amor por ti es inquebrantable 💪❤️", "En tus ojos veo nuestro futuro 👀🔮", "Amarte es mi más hermosa decisión ❤️✅", "Quiero vivir cada momento contigo ⏳💖", "Tu amor es mi mayor motivación 💖🚀", "Eres la persona que amo con todo mi ser 🥰💖", "Mi corazón siempre será tuyo 💖➡️🔒"

  ];
  
  function showFloatingMessage() {
    const container = document.getElementById("floating-messages");
    const msg = document.createElement("div");
    msg.classList.add("floating-message");
    msg.textContent = messages[Math.floor(Math.random() * messages.length)];
  
    // Posición aleatoria
    const topPos = Math.random() * 80 + 10; // Rango de 10% a 90%
    const leftPos = Math.random() * 80 + 10;
    
    msg.style.top = topPos + "%";
    msg.style.left = leftPos + "%";
    
  
    container.appendChild(msg);
  
    // Eliminar después de 4s
    setTimeout(() => {
      msg.remove();
    }, 4000);
  }
  
  // Mostrar un mensaje cada 4 segundos
  setInterval(showFloatingMessage, 4000);
  

  document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-music");

  // Algunos navegadores requieren interacción para reproducir audio
  function startAudio() {
    audio.play().catch(() => {
      // Silencioso si falla
    });
    document.removeEventListener("click", startAudio);
    document.removeEventListener("touchstart", startAudio);
  }

  document.addEventListener("click", startAudio);
  document.addEventListener("touchstart", startAudio);
});

  