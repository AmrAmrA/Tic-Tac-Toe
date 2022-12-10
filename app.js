let gameCase = Array.from(document.querySelectorAll(".case"));
// console.log(gameCase);

let messagePlayer = document.querySelector(".playPlease");

let buttonReset = document.querySelector(".reset");
let yourTurn = 1;
let count = 0;

for (let casePlay of gameCase) {
  casePlay.addEventListener("click", changeImage);
  function changeImage() {
    if (yourTurn === 1 && casePlay.src === "http://127.0.0.1:5500/square.png") {
      casePlay.src = "cross.jpg";
      yourTurn--;
      messagePlayer.textContent = `C'est au tour du joueur O `;
      count++;
      console.log(count);
      console.log(casePlay.classList[1]);
    } else if (
      yourTurn === 0 &&
      casePlay.src === "http://127.0.0.1:5500/square.png"
    ) {
      casePlay.src = "circle.png";
      messagePlayer.textContent = `C'est au tour du joueur X `;
      yourTurn++;
      count++;
      console.log(count);
      console.log(casePlay.classList[1]);
    }
  }
}

buttonReset.addEventListener("click", resetImage);
function resetImage() {
  if (count == 9) {
    for (let individualCase of gameCase) {
      individualCase.src = "http://127.0.0.1:5500/square.png";
      count = 0;
    }
  }
}
