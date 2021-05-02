import Player from './player.js';
import Enemy from './enemy.js';
import { canvas, ctx } from './canvas.js';

// Create player
const p = new Player();

// Create enemy
const e = new Enemy();

// Eventlisteners
window.addEventListener('keydown', move);

function move(e) {
  console.log(e.keyCode);
  p.move(e.keyCode);
}

const animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  p.draw();
  e.draw();
};
animate();
