
let deadCounter = document.getElementById("dead");
let lostCounter = document.getElementById("lost");


function getHole(index) {
  return document.getElementById(`hole${index}`);
}


for (let i = 1; i <= 9; i++) {
  let hole = getHole(i);

  hole.onclick = function () {

    if (hole.classList.contains("hole_has-mole")) {
      deadCounter.textContent = Number(deadCounter.textContent) + 1;
    } else {
      lostCounter.textContent = Number(lostCounter.textContent) + 1;
    }


    if (Number(deadCounter.textContent) === 10) {
      alert("Вы победили!");
      resetGame();
    }


    if (Number(lostCounter.textContent) === 5) {
      alert("Вы проиграли!");
      resetGame();
    }
  };
}


function resetGame() {
  deadCounter.textContent = 0;
  lostCounter.textContent = 0;
}
