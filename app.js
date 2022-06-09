const player1Score = document.querySelector(".container .left-side p");
const player2Score = document.querySelector(".container .right-side p");
const newGame = document.querySelector(".newgame");
const roll = document.querySelector(".rolls");
const hold = document.querySelector(".hold");
const currentRight = document.querySelector(".total-score-right p");
const currentLeft = document.querySelector(".total-score p");
const dice = document.querySelector(".dice img");
const rightSide = document.querySelector(".container .right-side");
const leftSide = document.querySelector(".container .left-side");
const arrowRight = document.querySelector(".score-right .fa-arrow-down");
const arrowLeft = document.querySelector(".score .fa-arrow-down");

let switchPlayer = true;
let randomNumber = Math.ceil(Math.random() * 6);
let diceNumber = 0;
arrowLeft.classList.toggle("active");
roll.addEventListener("click", () => {
  randomNumber = Math.ceil(Math.random() * 6);
  dice.setAttribute("src", `./image/${randomNumber}.png`);
  if (randomNumber == 1 && switchPlayer == true) {
    randomNumber = 0;
    currentLeft.innerHTML = 0;
    currentRight.innerHTML = 0;
    leftSide.style.backgroundColor = "transparent";
    rightSide.style.backgroundColor = " rgba(240, 248, 255, 0.288)";
    switchPlayer = false;
    arrowLeft.classList.remove("active");
    arrowRight.classList.add("active");
  }
  if (randomNumber == 1 && switchPlayer == false) {
    randomNumber = 0;
    currentLeft.innerHTML = 0;
    currentRight.innerHTML = 0;
    rightSide.style.backgroundColor = "transparent";
    leftSide.style.backgroundColor = " rgba(240, 248, 255, 0.288)";
    arrowLeft.style = "opacity:1;";
    arrowRight.style = "opacity 0;";
    switchPlayer = true;
    arrowLeft.classList.add("active");
    arrowRight.classList.remove("active");
  } else if (switchPlayer == true) {
    diceNumber = parseInt(currentLeft.innerHTML) + randomNumber;
    currentLeft.innerHTML = diceNumber;
    console.log(switchPlayer);
  } else if (switchPlayer == false) {
    console.log(randomNumber);
    diceNumber = parseInt(currentRight.innerHTML) + randomNumber;
    currentRight.innerHTML = diceNumber;
    console.log(switchPlayer);
  }
});

hold.addEventListener("click", () => {
  if (currentLeft.innerHTML >= 100) {
    alert("Player One Win !🎉");
  }
  if (currentRight.innerHTML >= 100) {
    alert("Player Two Win !🎉");
  }
  if (switchPlayer == true) {
    let playerOne = parseInt(currentLeft.innerHTML);
    player1Score.innerHTML = parseInt(player1Score.innerHTML) + playerOne;
    currentLeft.innerHTML = 0;
    switchPlayer = false;
    leftSide.style.backgroundColor = "transparent";
    rightSide.style.backgroundColor = " rgba(240, 248, 255, 0.288)";
    arrowLeft.classList.remove("active");
    arrowRight.classList.add("active");
  } else {
    let playerTwo = parseInt(currentRight.innerHTML);
    player2Score.innerHTML = parseInt(player2Score.innerHTML) + playerTwo;
    currentRight.innerHTML = 0;
    switchPlayer = true;
    rightSide.style.backgroundColor = "transparent";
    leftSide.style.backgroundColor = " rgba(240, 248, 255, 0.288)";
    arrowLeft.classList.add("active");
    arrowRight.classList.remove("active");
  }
});

newGame.addEventListener("click", () => {
  currentLeft.innerHTML = 0;
  currentRight.innerHTML = 0;
  switchPlayer == true;
  player1Score.innerHTML = 0;
  player2Score.innerHTML = 0;
  dice.removeAttribute("src", `./image/${randomNumber}.png`);
  arrowLeft.classList.add("active");
  arrowRight.classList.remove("active");
});
