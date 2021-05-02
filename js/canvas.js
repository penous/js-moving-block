const canvas = document.getElementById('level');
const ctx = canvas.getContext('2d');

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

export { canvas, ctx };
