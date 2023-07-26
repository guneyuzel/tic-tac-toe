const statusText = document.querySelector(".status");
const restartButton = document.querySelector(".restart");
const boxes = document.querySelectorAll(".grid-box");
const box1 = document.getElementById("b1");
const box2 = document.getElementById("b2");
const box3 = document.getElementById("b3");
const box4 = document.getElementById("b4");
const box5 = document.getElementById("b5");
const box6 = document.getElementById("b6");
const box7 = document.getElementById("b7");
const box8 = document.getElementById("b8");
const box9 = document.getElementById("b9");
var count = 0;

function updateStatus() {
  if (count % 2 == 0) {
    statusText.innerHTML = "Player O's turn";
  } else {
    statusText.innerHTML = "Player X's turn";
  }
}

function gameWinner() {
  if (
    (box1.innerText == "X" && box2.innerText == "X" && box3.innerText == "X") ||
    (box1.innerText == "X" && box4.innerText == "X" && box7.innerText == "X") ||
    (box1.innerText == "X" && box5.innerText == "X" && box9.innerText == "X") ||
    (box2.innerText == "X" && box5.innerText == "X" && box8.innerText == "X") ||
    (box3.innerText == "X" && box6.innerText == "X" && box9.innerText == "X") ||
    (box3.innerText == "X" && box5.innerText == "X" && box7.innerText == "X") ||
    (box4.innerText == "X" && box5.innerText == "X" && box6.innerText == "X") ||
    (box7.innerText == "X" && box8.innerText == "X" && box9.innerText == "X")
  ) {
    statusText.innerHTML = "Game Over! Player X won.";
    count = -1;
  } else if (
    (box1.innerText == "O" && box2.innerText == "O" && box3.innerText == "O") ||
    (box1.innerText == "O" && box4.innerText == "O" && box7.innerText == "O") ||
    (box1.innerText == "O" && box5.innerText == "O" && box9.innerText == "O") ||
    (box2.innerText == "O" && box5.innerText == "O" && box8.innerText == "O") ||
    (box3.innerText == "O" && box6.innerText == "O" && box9.innerText == "O") ||
    (box3.innerText == "O" && box5.innerText == "O" && box7.innerText == "O") ||
    (box4.innerText == "O" && box5.innerText == "O" && box6.innerText == "O") ||
    (box7.innerText == "O" && box8.innerText == "O" && box9.innerText == "O")
  ) {
    statusText.innerHTML = "Game Over! Player O won.";
    count = -1;
  } else if (
    box1.innerText != "" &&
    box2.innerText != "" &&
    box3.innerText != "" &&
    box4.innerText != "" &&
    box5.innerText != "" &&
    box6.innerText != "" &&
    box7.innerText != "" &&
    box8.innerText != "" &&
    box9.innerText != ""
  ) {
    statusText.innerHTML = "Game Over! Draw.";
    count = -1;
  }
}

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (count >= 0) {
      if (e.target.innerHTML != "") {
        return;
      } else {
        if (count % 2 == 0) {
          e.target.innerHTML = "";
          let element = document.createElement("h1");
          element.innerHTML = "X";
          e.target.appendChild(element);
          updateStatus();
        } else {
          e.target.innerHTML = "";
          let element = document.createElement("h1");
          element.innerHTML = "O";
          e.target.appendChild(element);
          updateStatus();
        }
        count++;
        gameWinner();
      }
    }
  });
});

restartButton.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerHTML = "";
  });
  count = 0;
  statusText.innerHTML = "Player X's turn";
});
