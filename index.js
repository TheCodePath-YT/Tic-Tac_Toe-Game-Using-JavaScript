let button = document.querySelector("button");
let board = document.querySelector(".board");
let showWinner = document.querySelector(".show-winner");
// Array from convert nodelist to array
let cells = Array.from(document.querySelectorAll(".cell"));
let isWinner = false;

let winnerCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], //Row Wise Winner
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], //Column Wise winner
  [0, 4, 8],
  [2, 4, 6], //Digonal
];
let currentPlayer = "X";
function GameStart(e) {
  let index = e.target.dataset.index;
  console.log(index);
  if (cells[index].textContent == "") {
    cells[index].textContent = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "0" : "X";
  }
  // Next Condition for winner
  winner();
}

// Create a function for winner
function winner() {
  winnerCondition.forEach((condition) => {  
    let condition1 = cells[condition[0]].textContent;
    let condition2 = cells[condition[1]].textContent;
    let condition3 = cells[condition[2]].textContent;
    if (
      condition1 == condition2 &&
      condition2 == condition3 &&
      condition1 !== ""
    ) 
    {
      showWinner.textContent = `Player ${condition1} wins`;
      isWinner=true;
      board.classList.add("d-none");
    }
  })
//   if Draw then
console.log(isWinner);
if(!isWinner && cells.every(cell=> cell.textContent !== "")){
    showWinner.textContent = "It's a Draw let's play again 🤝";
    board.classList.add("d-none");
}
}


// Create Function for Restart Game

function Restart() {
  currentPlayer = "X";
  isWinner=false;
  board.classList.remove("d-none");
  showWinner.textContent = "";
  cells.forEach((cell) => {
    cell.textContent = "";
  });
}

cells.forEach((cell) => {
  cell.addEventListener("click", GameStart);
});
button.addEventListener("click", Restart);
