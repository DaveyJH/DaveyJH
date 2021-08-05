const canvas = document.getElementById("canvas1");
let canvasWidth;
let canvasHeight;
const ctx = canvas.getContext("2d");
let rY; //refactor size depending on window height
let rX; //inset size depending on screen orientation

canvas.style.backgroundColor = "red"; // for demonstration

window.addEventListener("resize", handleChange);

function handleChange() {
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
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
  if (canvasWidth > canvasHeight) {
    rY = canvasHeight * .155;
  } else {
    rY = canvasHeight * .0785;
  }
  rX = canvasHeight * .155;
}


function player() {
  ctx.fillRect(1 * rX, canvasHeight - 3 * rX, 1 * rY, 1 * rY);
}