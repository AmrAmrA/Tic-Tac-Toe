let gameCase = Array.from(document.querySelectorAll(".case"));
// console.log(gameCase);

let messagePlayer = document.querySelector(".playPlease");

let buttonReset = document.querySelector(".reset");
let yourTurn = 1;




for (const casePlay of gameCase) {
  casePlay.addEventListener("click", changeImage);
  function changeImage() {
    if (yourTurn === 1 && casePlay.src === "http://127.0.0.1:5500/square.png") {
      casePlay.src = "cross.jpg";
      casePlay.classList.add("actif");
      yourTurn--;
      messagePlayer.textContent = `C'est au tour du joueur O `;
    } else if (
      yourTurn === 0 &&
      casePlay.src === "http://127.0.0.1:5500/square.png"
    ) {
      casePlay.src = "circle.png";
      casePlay.classList.add("actif");
      messagePlayer.textContent = `C'est au tour du joueur X `;
      yourTurn++;
    }
  }
}



for (let i = 0; i < gameCase.length; i++) {
  buttonReset.addEventListener('click', resetImage)
  function resetImage() {
  if (gameCase[i].classList.contains("actif")) {
    gameCase[i].src = "http://127.0.0.1:5500/square.png";
  }}
}
