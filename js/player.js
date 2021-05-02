import { canvas, ctx } from './canvas.js';

export default class Player {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.height = 50;
    this.width = 50;
    this.lives = 3;
  }

  draw() {
    ctx.fillStyle = 'darkslategrey';
    ctx.fillRect(this.x, this.y, this.height, this.width);
  }

  loseLive() {
    this.lives--;
  }

  move(keyCode) {
    if (![68, 83, 65, 87].includes(keyCode)) return;

    switch (keyCode) {
      case 68: //d
        if (this.x + this.width >= canvas.width) break;
        this.x += 12;
        break;
      case 83: //s
        if (this.y + this.height >= canvas.height) break;
        this.y += 12;
        break;
      case 65: //a
        if (this.x <= 0) break;
        this.x -= 12;
        break;
      case 87: //w
        if (this.y <= 0) break;
        this.y -= 12;
        break;
    }
  }
}
