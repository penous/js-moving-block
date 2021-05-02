import Player from './player.js';
import Enemy from './enemy.js';
import { canvas, ctx } from './canvas.js';

// Select lives div
const lives = document.getElementById('lives');

// Create player
const p = new Player();

// Create enemy array with starter enemy
const enemies = [new Enemy()];
// Create more enemies
setInterval(() => {
  const e = new Enemy();
  enemies.push(e);
}, Math.floor(Math.random() * 5000 + 1500));

// Delete enemies after a while
setInterval(() => {
  enemies.shift();
}, 8000);

// Eventlisteners
window.addEventListener('keydown', move);

function move(e) {
  console.log(e.keyCode);
  p.move(e.keyCode);
}

const showLives = () => {
  lives.innerHTML = '';
  [...Array(p.lives)].forEach((_) => {
    const img = document.createElement('img');
    img.src = '../images/heart-full.svg';
    lives.appendChild(img);
  });
  if (p.lives < 3) {
    [...Array(3 - p.lives)].forEach((_) => {
      const img = document.createElement('img');
      img.src = '../images/heart-lost.svg';
      lives.appendChild(img);
    });
  }
};

const animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  p.draw();
  enemies.forEach((enemy) => enemy.draw());
  showLives();
};
animate();
