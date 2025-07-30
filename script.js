let num = '';
let audio = new Audio();  // globaler Audio-Player

function press(d) {
  if (num.length < 3) num += d;
  update();
}

function erase() {
  num = num.slice(0, -1);
  update();
}

function update() {
  document.getElementById('display').textContent = num.padEnd(3, '-');
}

function play(src) {
  audio.pause();        // aktuelle Wiedergabe stoppen
  audio.currentTime = 0; // zurückspulen
  audio.src = src;
  audio.play().catch(console.log);
}

function playNumber() {
  const file = `sounds/${num || '000'}.mp3`;
  fetch(file).then(r => {
    if (r.ok) play(file);
    else play('sounds/999.mp3');
  }).catch(() => play('sounds/999.mp3'));
}

function playIntro() {
  play('sounds/BLC_introaudio.mp3');
}

update();
