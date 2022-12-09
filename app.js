let gameCase = Array.from(document.querySelectorAll(".case"));
// console.log(gameCase);

let messagePlayer = document.querySelector(".playPlease");

let buttonReset = document.querySelector(".reset");
let yourTurn = 1;
let count = 0; 



for (const casePlay of gameCase) {
  casePlay.addEventListener("click", changeImage);
  function changeImage() {
    count++
    console.log(count);
    // console.log(count);
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
    if (count = 9) {
      gameCase[i].src = "http://127.0.0.1:5500/square.png";
      count = 0; 
    }
  
  }
  }
     
