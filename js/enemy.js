import { canvas, ctx } from './canvas.js';

export default class Enemy {
  constructor() {
    this.x = this.generateSpawn().x;
    this.y = this.generateSpawn().y;
    this.height = 20;
    this.width = 20;
    this.moveX = this.generateMove();
    this.moveY = this.generateMove();
  }

  draw() {
    ctx.fillStyle = 'black';
    ctx.fillRect(this.x, this.y, this.height, this.width);
    this.move();
  }

  generateMove() {
    return Math.floor(Math.random() * 4) - 2;
  }

  generateSpawn() {
    const x = Math.floor(Math.random() * (canvas.width - 20)) + 20;
    const y = Math.floor(Math.random() * (canvas.height - 20)) + 20;
    return { x, y };
  }

  reverse() {
    if (this.x === 0) {
      this.moveX *= -1;
    } else if (this.x + this.width === canvas.width) {
      this.moveX *= -1;
    }
    if (this.y === 0) {
      this.moveY *= -1;
    } else if (this.y + this.height === canvas.height) {
      this.moveY *= -1;
    }
  }

  move() {
    if (this.moveX > 0) {
      if (!(this.x + this.width >= canvas.width)) this.x += this.moveX;
    } else {
      if (!(this.x <= 0)) this.x += this.moveX;
    }
    if (this.moveY > 0) {
      if (!(this.y + this.height >= canvas.height)) this.y += this.moveY;
    } else {
      if (!(this.y <= 0)) this.y += this.moveY;
    }

    this.reverse();
  }
}
