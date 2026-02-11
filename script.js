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
}
