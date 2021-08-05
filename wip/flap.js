const canvas = document.getElementById("canvas1");
let canvasWidth;
let canvasHeight;
const ctx = canvas.getContext("2d");
let rY; //refactor size depending on window height

canvas.style.backgroundColor = "red";

window.addEventListener("resize", handleChange);

function handleChange() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvasHeight = window.innerHeight;
  canvasWidth = window.innerWidth;
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  canvas.style.position = "absolute";
  canvas.style.top = "50%";
  canvas.style.left = "50%";
  canvas.style.transform = "translate(-50%, -50%)";
  calculateSize();
  player();
}

handleChange();

function calculateSize() {
  rY = canvasHeight * .155;
}


function player() {
  ctx.fillRect(50, 50, 1 * rY, 1 * rY);
}
