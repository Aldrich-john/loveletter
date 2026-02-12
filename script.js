const innerPolygon = document.getElementById("inner-polygon");
const outer = document.getElementById("outer");
const closeBtn = document.getElementById("close-btn");
const message1 = document.getElementById("message-1");
const message2 = document.getElementById("message-2");
const heartsRow = document.querySelectorAll(".hearts-row");
const heartBtn = document.getElementById("heart-btn");

function toggleEnvelope() {
  
  innerPolygon.classList.toggle("inner-open");
  outer.classList.toggle("outer-open");
  heartBtn.classList.toggle("hide");
  closeBtn.classList.toggle("show");
  message1.classList.toggle("hide");
  message2.classList.toggle("show");
  heartsRow.forEach(element => element.classList.toggle("animated"));
  
}

function toggleEnvelope() {
  const envelope = document.querySelector('.envelope-flap');
  const letter = document.getElementById('letter');

  envelope.classList.toggle('open'); // existing flap animation

  // show or hide letter
  if(letter.style.opacity == '1') {
    letter.style.opacity = '0';
    letter.style.transform = 'translateX(-50%) translateY(-100%)';
  } else {
    letter.style.opacity = '1';
    letter.style.transform = 'translateX(-50%) translateY(0)';
  }

  heartBtn.style.display = 'none';
  explodeHearts();
}
function createFalling() {
  const container = document.getElementById("falling-container");
  const item = document.createElement("div");
  item.classList.add("falling");

  // random hearts & flowers
  const emojis = ["💖","🌸","🌹","💐","💘"];
  item.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  item.style.left = Math.random() * window.innerWidth + "px";
  item.style.animationDuration = (3 + Math.random() * 5) + "s";
  item.style.fontSize = (20 + Math.random() * 30) + "px";

  container.appendChild(item);

  setTimeout(() => item.remove(), 8000);
}

setInterval(createFalling, 300);

function explodeHearts() {
  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.classList.add("explosion-heart");
    heart.innerText = "💖";

    heart.style.left = "50%";
    heart.style.top = "50%";

    const x = (Math.random() - 0.5) * 600;
    const y = (Math.random() - 0.5) * 600;
    heart.style.setProperty("--x", x + "px");
    heart.style.setProperty("--y", y + "px");

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1500);
  }
}

