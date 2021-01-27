const titleColor = document.getElementById("titleColor");
const newColor = document.getElementById("newColor");
const rand_num = (limit=256) => Math.floor(Math.random() * limit);

let numColor = 6;
let color = setupColors();
let squares = document.querySelectorAll(".square");
let pickedColor= color[rand_num(numColor)];
let message = document.getElementById("message");
let h1 = document.querySelector("h1");


newColor.addEventListener("click", reset);

titleColor.textContent = pickedColor;

function printSquares(){
  for (let i = squares.length - 1; i >= 0; i--) {
    if(i < numColor){
      squares[i].style.display = 'inline-block';
      squares[i].style.backgroundColor = color[i];
      
      squares[i].addEventListener("click", function(){
        if (this.style.backgroundColor === pickedColor) {
          message.textContent = "correct!!";
          newColor.textContent = "Play Again";
          changeColor(pickedColor);
        }else {
          this.style.backgroundColor = "#232323";
          message.textContent = "Try Again";
        }
      });

    } else {
      squares[i].style.display = 'none';
    }
  }
}

function changeColor(color) {
  for (let square of squares) {
    square.style.background = pickedColor;
  }
  h1.style.backgroundColor = color;
}

function generateRandomColor() {
  let r = rand_num(256);
  let g = rand_num(256);
  let b = rand_num(256);
  
  let color = "rgb("+r+", "+g+", "+b+")";
  return color;
}

function setupColors(){
  let colores = [];
  for(let i = 0; i < numColor; i++){
    colores[i] = generateRandomColor();
  }
  return colores;
}

function setLimit(limit) {
  if(limit != numColor){
    numColor = limit
    reset()
    easy.classList.toggle('mode--selected');
    hard.classList.toggle('mode--selected');
  }
}

function reset(){
  let i = Math.floor(Math.random()*numColor);
  color = setupColors();
  pickedColor = color[i];
  message.textContent ="";
  newColor.textContent = "new colors";
  h1.style.backgroundColor = "steelblue";
  printSquares();
  titleColor.textContent = pickedColor;
}
printSquares();